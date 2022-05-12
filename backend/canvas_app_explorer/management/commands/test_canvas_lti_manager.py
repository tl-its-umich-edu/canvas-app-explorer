from django.core.management.base import BaseCommand, CommandError
from canvas_app_explorer.canvas_lti_manager import CanvasLtiManager

#  manage.py TestCanvasLtiManager <API_KEY> <course_id>
class Command(BaseCommand):
    help = 'Testing CanvasLtiManager'

    def add_arguments(self, parser):
        parser.add_argument('api_key', nargs=1, type=str)
        parser.add_argument('course_id', nargs=1, type=int)
        parser.add_argument('api_url', nargs='?', type=str, default="https://umich-dev.instructure.com")

    def handle(self, *args, **options):
        manager = CanvasLtiManager(API_URL=options['api_url'], API_KEY=options['api_key'][0], course_id=options['course_id'][0])
        res = manager.get_tools_available_in_course()
        self.stdout.write(self.style.SUCCESS('#items %s\n' % len(res)))
        for item in res:
            self.stdout.write(self.style.SUCCESS(item))
