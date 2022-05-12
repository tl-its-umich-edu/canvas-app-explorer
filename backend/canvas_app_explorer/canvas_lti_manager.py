from typing import List
from canvasapi import Canvas
from .data_class import ExternalTool

class CanvasLtiManager:
    def __init__(self, api_url: str, api_key: str, course_id: int):
        self.course_id = course_id
        self.requestor = Canvas(api_url, api_key)

    def get_tools_available_in_course(self) -> List[ExternalTool]:
        ex_tools = []
        course = self.requestor.get_course(self.course_id)
        for tab in course.get_tabs():
            if 'external_tools' in tab.html_url: #filter external tools from all tabs
                ex_tools.append(ExternalTool(
                    label=tab.label,
                    id=int(tab.id.split('_')[-1]),
                    is_hidden=(hasattr(tab, 'hidden'))
                ))
        return ex_tools

