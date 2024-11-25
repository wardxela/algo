from dataclasses import dataclass
from enum import Enum
from typing import Literal, NamedTuple, TypeAlias, TypedDict

class Vector(NamedTuple):
    x: int
    y: int

class Vector2(TypedDict):
    x: int
    y: int

Vector3: TypeAlias = dict[Literal['x', 'y'], int]

@dataclass(frozen=True, slots=True)
class Vector4:
    x: int
    y: int


def sum_vectors(a: Vector, b: Vector) -> Vector:
    return Vector(a.x + b.x, a.y + b.y)

class FunctionType(str, Enum):
    decreasing = 'Невозрастающая'
    increasing = 'Неубывающая'

