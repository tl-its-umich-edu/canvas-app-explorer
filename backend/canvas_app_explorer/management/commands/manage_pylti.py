import os
from datetime import datetime

from Crypto.PublicKey import RSA
from Crypto.PublicKey.RSA import RsaKey
from django.core.management.base import BaseCommand, CommandParser
from django.db.utils import IntegrityError

# https://github.com/dmitry-viskov/pylti1.3/blob/master/pylti1p3/contrib/django/lti1p3_tool_config/models.py
from pylti1p3.contrib.django.lti1p3_tool_config.models import LtiToolKey, LtiTool


class Command(BaseCommand):
    help = "Generate a private/public key pair and add them to the pylti13 database. This can be called with the same issuer + client ID to update a previous key. The Tool Key will be re-used"

    def add_arguments(self, parser: CommandParser):
        parser.add_argument('--auth_login_url', dest='auth_login_url', type=str, help="Canvas Login URL",
                            default="https://canvas.instructure.com/api/lti/authorize_redirect")
        parser.add_argument('--auth_token_url', dest='auth_token_url', type=str,
                            help="Canvas Token URL", default="https://canvas.instructure.com/login/oauth2/token")
        parser.add_argument('--client_id', dest='client_id', type=int, required=True, help="Canvas LTI Client ID")
        parser.add_argument('--issuer', dest='issuer', type=str,
                            default="https://canvas.instructure.com", help="Usually https://canvas.instructure.com")
        parser.add_argument('--key_set_url', dest='key_set_url', type=str,
                            help="Canvas Key Set URL", default="https://canvas.instructure.com/api/lti/security/jwks")
        parser.add_argument('--title', dest='title', required=True, type=str, help="LTI Title")
        parser.add_argument('--tool_key', dest='tool_key', required=True, type=str,
                            help="Name of Tool Key to use, will create if new")
        parser.add_argument('--deployment_ids', dest='deployment_ids',
                            nargs='*', type=str, help="List of Deployment ID(s). Can be multiple.", default="")

    def handle(self, *args, **options: dict):
        key: RsaKey = RSA.generate(4096)

        self.stdout.write('Generating public and private key for LTI Tool Key table')

        # This will try to create the tool key and if it already exists it will look it up instead
        try:
            lti_key = LtiToolKey.objects.create(name=options["tool_key"],
                                                private_key=key.exportKey().decode('utf-8'),
                                                public_key=key.publickey().exportKey().decode('utf-8')
                                                )
        except IntegrityError:
            # Key must already have been created
            self.stdout.write(
                f"Using existing key named {options['tool_key']}")
            # Lookup the tool key
            lti_key = LtiToolKey.objects.get(name=options["tool_key"])

        # Update or create a value based on the client_id and issuer keys
        LtiTool.objects.update_or_create(client_id=options["client_id"],
                                         issuer=options["issuer"],
                                         defaults=dict(title=options["title"],
                                                       is_active=True,
                                                       client_id=options["client_id"],
                                                       issuer=options["issuer"],
                                                       use_by_default=False,
                                                       auth_login_url=options["auth_login_url"],
                                                       auth_token_url=options["auth_token_url"],
                                                       key_set_url=options["key_set_url"],
                                                       tool_key=lti_key,
                                                       deployment_ids=options["deployment_ids"]
                                                       ))
