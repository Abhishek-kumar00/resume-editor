//Educational Information
function EducationalInformation({ eduInfo, onEduEdit, isEduEditing, onEduSave }) {
    if (isEduEditing) {
      return (
        <div className="EducationalInformation">
          <input
            type="text"
            value={eduInfo.school}
            onChange={(e) => onEduEdit({ ...eduInfo, school: e.target.value })}
            style={{ border: 'none', outline: 'none' }}
          />
          <br />
          <input
            type="text"
            value={eduInfo.degree}
            onChange={(e) => onEduEdit({ ...eduInfo, degree: e.target.value })}
            style={{ border: 'none', outline: 'none' }}
          />
          <br />
          <input
            type="text"
            value={eduInfo.graduationYear}
            onChange={(e) => onEduEdit({ ...eduInfo, graduationYear: e.target.value })}
            style={{ border: 'none', outline: 'none' }}
          />
          <br />
          <button onClick={onEduSave}>Save</button>
        </div>
      );
    }
  
    return (
      <div className="EducationalInfo">
        <h2>Educational Information</h2>
        <p><b>School : </b> {eduInfo.school}</p>
        <p><b>Degree: </b> {eduInfo.degree}</p>
        <p><b>Graduation Year: </b> {eduInfo.graduationYear}</p>
      </div>
    );
  }
  
  export default EducationalInformation;