from dataclasses import dataclass

@dataclass
class ExternalTool:
    label: str
    id: int
    isHidden: bool
    def __str__(self) -> str:
        return f'ExternalTool({self.label},{self.id},{self.isHidden})'

