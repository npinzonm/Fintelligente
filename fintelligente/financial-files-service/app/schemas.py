from pydantic import BaseModel
from datetime import datetime


class FileResponse(BaseModel):
    id: int
    original_name: str
    file_type: str | None
    size: int | None
    status: str
    created_at: datetime

    class Config:
        from_attributes = True
