import React from 'react';

function GenInfo({ info, onEdit, isEditing, onSave }) {
  if (isEditing) {
    return (
      <div className="generalInformation">
        <input
          type="text"
          value={info.name}
          onChange={(e) => onEdit({ ...info, name: e.target.value })}
          style={{ border: 'none', outline: 'none' }}
        />
        <br />
        <input
          type="email"
          value={info.email}
          onChange={(e) => onEdit({ ...info, email: e.target.value })}
          style={{ border: 'none', outline: 'none' }}
        />
        <br />
        <input
          type="text"
          value={info.address}
          onChange={(e) => onEdit({ ...info, address: e.target.value })}
          style={{ border: 'none', outline: 'none' }}
        />
        <br />
        <input
          type="tel"
          value={info.phone}
          onChange={(e) => onEdit({ ...info, phone: e.target.value })}
          style={{ border: 'none', outline: 'none' }}
        />
        <br />
        <button onClick={onSave}>Save</button>
      </div>
    );
  }

  return (
    <div className="generalInformation">
      <h3>Name: {info.name}</h3>
      <p>
        E-mail ID: {info.email}
        <br />
        Address: {info.address}
        <br />
        Phone: {info.phone}
      </p>
    </div>
  );
}

export default GenInfo;