from django.test import TestCase
from .canvas_lti_manager import CanvasLtiManager
from django.conf import settings
# Create your tests here.
class TestCanvasLtiManager(TestCase):
    def test_getExTools(self):
        API_URL = 'https://umich-dev.instructure.com'
        API_KEY =  settings.TEST_API_KEY
        manager = CanvasLtiManager(API_URL=API_URL, API_KEY=API_KEY, course_id=201)
        res = manager.get_tools_available_in_course();
        self.assertEqual(len(res),10 )