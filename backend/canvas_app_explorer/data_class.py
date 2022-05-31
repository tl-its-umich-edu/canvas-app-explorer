from dataclasses import dataclass

@dataclass
class ExternalToolTab:
    label: str
    id: int
    is_hidden: bool

    def __str__(self) -> str:
        return f'ExternalTool({self.label},{self.id},{self.is_hidden})'
