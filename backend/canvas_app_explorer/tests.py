from django.test import TestCase
from django.conf import settings

from .canvas_lti_manager import CanvasLtiManager
from backend.canvas_app_explorer.data_class import ExternalTool

# Create your tests here.
class TestCanvasLtiManager(TestCase):
    def test_get_ex_tools(self):
        manager = CanvasLtiManager(settings.TEST_API_URL, settings.TEST_API_KEY, settings.TEST_COURSE_ID)
        res = manager.get_tools_available_in_course()
        for tool in res:
            self.assertIsInstance(tool, ExternalTool)
