from django.conf import settings
from django.test import TestCase

from .manager import CanvasLtiManager
from .data_class import ExternalToolTab


class TestCanvasLtiManager(TestCase):
    """
    Integration tests for CanvasLtiManager
    """

    def test_get_tools_available_in_course(self):
        manager = CanvasLtiManager(settings.TEST_API_URL, settings.TEST_API_KEY, settings.TEST_COURSE_ID)
        res = manager.get_tools_available_in_course()
        for tool in res:
            self.assertIsInstance(tool, ExternalToolTab)

    def test_update_tool_navigation(self):
        manager = CanvasLtiManager(settings.TEST_API_URL, settings.TEST_API_KEY, settings.TEST_COURSE_ID)
        tool_tabs = manager.get_tools_available_in_course()
        if len(tool_tabs) > 0:
            first_tool_tab = tool_tabs[0]
            prev_is_hidden = first_tool_tab.is_hidden
            new_tool_tab = manager.update_tool_navigation(first_tool_tab.id, not prev_is_hidden)
            self.assertNotEqual(prev_is_hidden, new_tool_tab.is_hidden)
