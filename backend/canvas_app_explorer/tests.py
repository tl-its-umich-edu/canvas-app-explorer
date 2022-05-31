from django.conf import settings
from django.test import TestCase

from backend.canvas_app_explorer.canvas_lti_manager import CanvasLtiManager
from backend.canvas_app_explorer.data_class import ExternalToolTab

# Create your tests here.
class TestCanvasLtiManager(TestCase):

    def test_get_ex_tools(self):
        manager = CanvasLtiManager(settings.TEST_API_URL, settings.TEST_API_KEY, settings.TEST_COURSE_ID)
        res = manager.get_tools_available_in_course()
        for tool in res:
            self.assertIsInstance(tool, ExternalToolTab)

    def test_update_tool_nav_enabled(self):
        manager = CanvasLtiManager(settings.TEST_API_URL, settings.TEST_API_KEY, settings.TEST_COURSE_ID)
        tools = manager.get_tools_available_in_course()
        if len(tools) > 0:
            first_tool_tab = tools[0]
            prev_is_hidden = first_tool_tab.is_hidden
            new_tool_tab = manager.update_tool_visibility(first_tool_tab.id, not prev_is_hidden)
            self.assertNotEqual(prev_is_hidden, new_tool_tab.is_hidden)
