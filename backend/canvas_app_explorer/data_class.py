from dataclasses import dataclass

@dataclass
class ExternalTool:
    label: str
    id: int
    is_hidden: bool
    def __str__(self) -> str:
        return f'ExternalTool({self.label},{self.id},{self.is_hidden})'

