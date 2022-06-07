from typing import List, TypedDict

from canvasapi import Canvas
from canvasapi.tab import Tab

from .data_class import ExternalToolTab

class TabUpdateParams(TypedDict):
    hidden: bool

class TabAttributes(TypedDict):
    id: str
    course_id: int

class CanvasLtiManager:
    """
    Adapter for canvasapi library focused on managing LTI tools in a course context
    """
    external_tool_prefix = 'context_external_tool_'

    def __init__(self, api_url: str, api_key: str, course_id: int):
        self.course_id: int = course_id
        self.canvas_api: Canvas = Canvas(api_url, api_key)

    def create_external_tool_tab(self, tab: Tab) -> ExternalToolTab:
        return ExternalToolTab(
            label=tab.label,
            id=int(tab.id.replace(self.external_tool_prefix, '')),
            is_hidden=(hasattr(tab, 'hidden'))
        )

    def get_tools_available_in_course(self) -> List[ExternalToolTab]:
        ex_tool_tabs = []
        course = self.canvas_api.get_course(self.course_id)
        for tab in course.get_tabs():
            if 'external_tools' in tab.html_url:
                ex_tool_tabs.append(self.create_external_tool_tab(tab))
        return ex_tool_tabs

    def update_tool_navigation(self, canvas_id: int, is_hidden: bool) -> ExternalToolTab:
        update_params: TabUpdateParams = { 'hidden': is_hidden }
        tab_attributes: TabAttributes = {
            'id': self.external_tool_prefix + str(canvas_id),
            'course_id': self.course_id
        }

        tool_tab = Tab(
            self.canvas_api._Canvas__requester,
            tab_attributes
        )
        data = tool_tab.update(**update_params)
        return self.create_external_tool_tab(data)
