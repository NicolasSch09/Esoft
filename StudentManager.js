import React, { useState } from 'react';
import Axios from 'axios';
// ... any other imports (SweetAlert, Bootstrap, etc.)

function StudentManager() {
  // Example states
  const [firstName, setFirstName] = useState('');
  const [students, setStudents] = useState([]);

  // Example: get students
  const getStudents = () => {
    Axios.get('http://localhost:3002/alumnos')
      .then((response) => {
        setStudents(response.data);
      })
      .catch(console.error);
  };

  // Example: register student
  const registerStudent = () => {
    // Your code for registering (Axios.post, etc.)
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Student Manager</h2>

      <div className="mb-3">
        <label>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <button onClick={registerStudent}>Register</button>
      </div>

      <div>
        <button onClick={getStudents}>Get Students</button>
      </div>

      {students.map((s) => (
        <p key={s.id}>
          {s.id} - {s.first_name} {s.last_name}
        </p>
      ))}
    </div>
  );
}

export default StudentManager;