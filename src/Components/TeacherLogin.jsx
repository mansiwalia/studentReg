import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const TeacherLogin = ({ onLogin, onBack }) => {
  const [teacherName, setTeacherName] = useState('');
  const [teacherPassword, setTeacherPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (teacherName === 'cubic' && teacherPassword === '12344321') {
      onLogin();
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f5f5f5, #e0e0e0)', // Light gradient background
        padding: '10px',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '400px',
          background: '#ffffff',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
        }}
      >
        <h2
          style={{
            color: '#1976d2',
            textAlign: 'center',
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            marginBottom: '20px',
          }}
        >
          Teacher Login
        </h2>
        <form onSubmit={handleLogin}>
          <TextField
            label="Name"
            value={teacherName}
            onChange={(e) => setTeacherName(e.target.value)}
            fullWidth
            margin="normal"
            required
            InputProps={{
              style: { fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' },
            }}
          />
          <TextField
            type="password"
            label="Password"
            value={teacherPassword}
            onChange={(e) => setTeacherPassword(e.target.value)}
            fullWidth
            margin="normal"
            required
            InputProps={{
              style: { fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{
              marginTop: '20px',
              padding: '12px',
              fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
              borderRadius: '8px',
            }}
          >
            Login
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            style={{
              marginTop: '10px',
              padding: '12px',
              fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
              borderRadius: '8px',
            }}
            onClick={onBack}
          >
            Back to Home
          </Button>
        </form>
      </div>
    </div>
  );
};

export default TeacherLogin;
