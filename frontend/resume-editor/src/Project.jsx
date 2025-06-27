import React from 'react';

function Projects({ projectInfo, onProjectEdit, isProjectEditing, onProjectSave }) {
  if (isProjectEditing) {
    return (
      <div className="projectInformation">
        <h3>
          <input
            type="text"
            value={projectInfo.projectName}
            onChange={(e) => onProjectEdit({...projectInfo, projectName: e.target.value})}
            style={{ border: 'none', outline: 'none' }}
          />
        </h3>
        <br />
        <textarea
          value={projectInfo.projectDescription}
          onChange={(e) => onProjectEdit({...projectInfo, projectDescription: e.target.value})}
          style={{ border: 'none', outline: 'none' }}
        ></textarea>
        <br />
        <button onClick={onProjectSave}>Save</button>
      </div>
    );
  }
  return (
    <div className="projectInformation">
      <h2>Project Details</h2>
      <p><h3>{projectInfo.projectName}</h3></p>
      <p>{projectInfo.projectDescription}</p>
    </div>
  );
}

export default Projects;