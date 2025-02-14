import React, { useState } from 'react';

import DisplayData from './Components/DisplayData';
import HomePage from './Components/HomePage';
import StudentForm from './Components/StudentForm';
import TeacherLogin from './Components/TeacherLogin';


function App() {
  const [role, setRole] = useState(null); // To track the current role (student/teacher)
  const [students, setStudents] = useState([]); // Array to hold student data
  const [isTeacherLoggedIn, setIsTeacherLoggedIn] = useState(false); // Teacher login state

  // Handles role selection (student/teacher)
  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
  };

  // Handles submission of the student form and updates the student list
  const handleStudentSubmit = (studentData) => {
    alert('Your form has been submitted!');
    setStudents((prevStudents) => [...prevStudents, studentData]);
    setRole(null); // Reset role after submission
  };

  // Handles teacher login
  const handleTeacherLogin = () => {
    setIsTeacherLoggedIn(true);
    setRole(null); // Reset role after login
  };

  // Handles logout for the teacher
  const handleLogout = () => {
    setIsTeacherLoggedIn(false);
    setRole(null); // Reset role after logout
  };

  // Handles student deletion by index
  const handleDeleteStudent = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        backgroundColor: '#f4f5f7',
        minHeight: '100vh',
      }}
    >
      {/* HomePage: Displayed when no role is selected and teacher is not logged in */}
      {!role && !isTeacherLoggedIn && (
        <HomePage onSelectRole={handleRoleSelect} />
      )}

      {/* StudentForm: Displayed when the role is "student" */}
      {role === 'student' && (
        <StudentForm
          onSubmit={handleStudentSubmit}
          onBack={() => setRole(null)} // Navigate back to the HomePage
        />
      )}

      {/* TeacherLogin: Displayed when the role is "teacher" and not logged in */}
      {role === 'teacher' && !isTeacherLoggedIn && (
        <TeacherLogin
          onLogin={handleTeacherLogin}
          onBack={() => setRole(null)} // Navigate back to the HomePage
        />
      )}

      {/* DisplayData: Displayed when the teacher is logged in */}
      {isTeacherLoggedIn && (
        <DisplayData
          students={students} // Pass the student list
          onDelete={handleDeleteStudent} // Pass the delete handler
          onLogout={handleLogout} // Pass the logout handler
        />
      )}
   

    </div>
  );
}

export default App;
