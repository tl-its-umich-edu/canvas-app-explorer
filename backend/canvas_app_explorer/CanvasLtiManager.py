from typing import List
from canvasapi import Canvas
from .ExternalTool_interface import ExternalTool

class CanvasLtiManager:
    def __init__(self, API_URL : str, API_KEY : str, course_id : int):
        self.course_id = course_id
        self.requestor = Canvas(API_URL, API_KEY)

    def get_tools_available_in_course(self) -> List[ExternalTool]:
        exTools = []
        course = self.requestor.get_course(self.course_id)
        for tab in course.get_tabs():
            if "external_tools" in tab.html_url: #filter external tools from all tabs
                exTools.append(ExternalTool(
                    label=tab.label,
                    id=tab.id,
                    isHidden=(hasattr(tab, 'hidden'))
                ))
        return exTools

