from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models.resume import ResumeRequest
from models.project import ProjectRequest
from models.skills import SkillsRequest
from services.gemini_service import (
    generate_summary,
    generate_cover_letter,
    improve_project,
    enhance_skills,
)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {"message": "Welcome to AI Resume & Cover Letter Generator API 🚀"}


@app.get("/health")
def health():
    return {"status": "Server is running successfully!"}


@app.post("/generate-summary")
def generate_resume_summary(data: ResumeRequest):
    summary = generate_summary(data)
    return {"summary": summary}


@app.post("/generate-cover-letter")
def generate_cover(data: ResumeRequest):
    cover_letter = generate_cover_letter(data)
    return {"cover_letter": cover_letter}


@app.post("/improve-project")
def improve_project_description(data: ProjectRequest):
    improved_project = improve_project(data)
    return {"improved_project": improved_project}


@app.post("/enhance-skills")
def enhance_user_skills(data: SkillsRequest):
    enhanced_skills = enhance_skills(data)
    return {"enhanced_skills": enhanced_skills}