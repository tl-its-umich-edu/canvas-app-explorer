from django.test import TestCase
from .CanvasLtiManager import CanvasLtiManager
from django.conf import settings
# Create your tests here.
class TestCanvasLtiManager(TestCase):
    def test_getExTools(self):
        API_URL = 'https://umich-dev.instructure.com'
        API_KEY =  settings.TEST_API_KEY
        c_manager = CanvasLtiManager(API_URL=API_URL, API_KEY=API_KEY, course_id=201)
        res = c_manager.get_tools_available_in_course();
        self.assertEqual(len(res),10 )