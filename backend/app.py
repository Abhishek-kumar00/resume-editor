from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class aiEnhancer(BaseModel):
    section: str
    content: str

@app.post("/ai-enhance")
def enhanceResume(data: aiEnhancer):
    return {
        "section": data.section,
        "enhancedSection": f"Improved: {data.content}"
    }

@app.post("/save-resume")
def saveResume(data: dict):
    with open("resume.json", "w") as f:
        json.dump(data, f)
    return {"status": "Saved"}
