from django.test import TestCase
from django.conf import settings

from .canvas_lti_manager import CanvasLtiManager
from backend.canvas_app_explorer.data_class import ExternalTool

# Create your tests here.
class TestCanvasLtiManager(TestCase):
    def test_get_ex_tools(self):
        API_URL = settings.TEST_API_URL
        API_KEY = settings.TEST_API_KEY
        COURSE_ID = settings.TEST_COURSE_ID
        manager = CanvasLtiManager(API_URL=API_URL, API_KEY=API_KEY, course_id=COURSE_ID)
        res = manager.get_tools_available_in_course()
        for tool in res:
            self.assertIsInstance(tool, ExternalTool)
