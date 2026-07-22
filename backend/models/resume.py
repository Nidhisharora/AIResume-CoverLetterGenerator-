from pydantic import BaseModel

class ResumeRequest(BaseModel):
    name: str
    education: str
    experience: str
    skills: list[str]
    projects: list[str]
    achievements: list[str]
    target_role: str