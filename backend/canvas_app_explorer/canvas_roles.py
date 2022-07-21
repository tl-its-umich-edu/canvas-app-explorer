from enum import Enum


class CanvasRole(Enum):
    ACCOUNT_ADMIN = 'Account Admin'
    SUB_ACCOUNT_ADMIN = 'Sub-Account Admin'
    TEACHER = 'TeacherEnrollment'


STAFF_COURSE_ROLES = [CanvasRole.ACCOUNT_ADMIN, CanvasRole.SUB_ACCOUNT_ADMIN, CanvasRole.TEACHER]
