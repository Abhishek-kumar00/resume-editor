import React, { useState } from 'react';
import './App.css';
import axios from "axios";
import GenInfo from './genInfo';
import EducationalInformation from './Educational';
import Projects from './Project';

function App() {
  const [info, setInfo] = useState({
    name: 'Abhishek Kumar',
    email: 'abhpinran98@gmail.com',
    address: '123 Main Street, Anytown, USA 12345',
    phone: '000000000000'
  });

  const [eduInfo, setEduInfo] = useState({
    school: 'ABC School of Technology',
    degree: 'Bachelor of Technology',
    graduationYear: '2023'
  });

  const [projectInfo, setProjectInfo] = useState({
    projectName: 'Internship',
    projectDescription: 'please give me this internship'
  });

  const [isEditing, setIsEditing] = useState(false);
  const [isEduEditing, setIsEduEditing] = useState(false);
  const [isProjectEditing, setIsProjectEditing] = useState(false);

  
  const handleEdit = (newInfo) => setInfo(newInfo);
  const handleEduEdit = (newEduInfo) => setEduInfo(newEduInfo);
  const handleProjectEdit = (newProjectInfo) => setProjectInfo(newProjectInfo);

  const handleSave = () => setIsEditing(false);
  const handleEduSave = () => setIsEduEditing(false);
  const handleProjectSave = () => setIsProjectEditing(false);

  
  const handleInfoEnhance = async () => {
    const res = await axios.post("http://localhost:8000/ai-enhance", {
      section: "info",
      content: JSON.stringify(info),
    });
    alert("AI Enhanced Info:\n" + res.data.enhancedSection);
  };

  const handleEduEnhance = async () => {
    const res = await axios.post("http://localhost:8000/ai-enhance", {
      section: "education",
      content: JSON.stringify(eduInfo),
    });
    alert("AI Enhanced Education:\n" + res.data.enhancedSection);
  };

  const handleProjEnhance = async () => {
    const res = await axios.post("http://localhost:8000/ai-enhance", {
      section: "project",
      content: JSON.stringify(projectInfo),
    });
    alert("AI Enhanced Project:\n" + res.data.enhancedSection);
  };

 
  const handleSaveResume = async () => {
    const fullResume = {
      info,
      eduInfo,
      projectInfo,
    };
    await axios.post("http://localhost:8000/save-resume", fullResume);
    alert("Resume saved to backend!");
  };

 
  const handleDownloadResume = () => {
    const fullResume = {
      info,
      eduInfo,
      projectInfo,
    };
    const blob = new Blob([JSON.stringify(fullResume, null, 2)], {
      type: "application/json",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "resume.json";
    link.click();
  };

  return (
    <div className="App" style={{ padding: "20px" }}>
      <h1><u>Resume Editor</u></h1>
      <br />

      
      <GenInfo
        info={info}
        onEdit={handleEdit}
        isEditing={isEditing}
        onSave={handleSave}
      />
      {!isEditing && (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
      <button onClick={handleInfoEnhance}>Enhance Info with AI</button>

      <hr />

      
      <EducationalInformation
        eduInfo={eduInfo}
        onEduEdit={handleEduEdit}
        isEduEditing={isEduEditing}
        onEduSave={handleEduSave}
      />
      {!isEduEditing && (
        <button onClick={() => setIsEduEditing(true)}>Edit Education</button>
      )}
      <button onClick={handleEduEnhance}>Enhance Education with AI</button>

      <hr />

      
      <Projects
        projectInfo={projectInfo}
        onProjectEdit={handleProjectEdit}
        isProjectEditing={isProjectEditing}
        onProjectSave={handleProjectSave}
      />
      {!isProjectEditing && (
        <button onClick={() => setIsProjectEditing(true)}>Edit Project</button>
      )}
      <button onClick={handleProjEnhance}>Enhance Project with AI</button>

      <hr />

      
      <div style={{ marginTop: "20px" }}>
        <button onClick={handleSaveResume}>💾 Save Resume to Backend</button>
        <button onClick={handleDownloadResume} style={{ marginLeft: "10px" }}>
          ⬇️ Download Resume (.json)
        </button>
      </div>
    </div>
  );
}

export default App;
