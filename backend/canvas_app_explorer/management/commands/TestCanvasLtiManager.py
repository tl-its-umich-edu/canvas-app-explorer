from django.core.management.base import BaseCommand, CommandError
from canvas_app_explorer.CanvasLtiManager import CanvasLtiManager

#  manage.py TestCanvasLtiManager <API_KEY> <course_id>
class Command(BaseCommand):
    help = 'Testing '

    def add_arguments(self, parser):
        parser.add_argument('API_KEY', nargs=1, type=str)
        parser.add_argument('course_id', nargs=1, type=int)
        parser.add_argument('API_URL', nargs='?', type=str, default="https://umich-dev.instructure.com")

    def handle(self, *args, **options):
        cManager = CanvasLtiManager(API_URL=options['API_URL'], API_KEY=options['API_KEY'][0], course_id=options['course_id'][0])
        res = cManager.get_tools_available_in_course()
        self.stdout.write(self.style.SUCCESS('#items %s\n' % len(res)))
        for item in res:
            self.stdout.write(self.style.SUCCESS(item))
