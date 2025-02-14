import { Button } from '@mui/material';
import React from 'react';

const HomePage = ({ onSelectRole }) => {
  return (
    <div
      style={{
        textAlign: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1c1c1c, #2c3e50)', // Gradient background
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
      }}
    >
      {/* Content */}
      <div style={{ marginBottom: '40px', maxWidth: '700px' }}>
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)', // Adjust font size for responsiveness
          margin: '20px 0',
          color: '#f39c12',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
        }}>
          Welcome to The Cubic Class Registration Page
        </h1>
        <p style={{
          fontSize: 'clamp(1rem, 3vw, 1.3rem)', // Adjust font size for responsiveness
          margin: '10px 0',
          color: '#ecf0f1',
          lineHeight: '1.6',
        }}>
          Join us and take the first step towards your academic success! With state-of-the-art facilities and expert mentors, your future starts here.
        </p>
      </div>

      {/* Buttons */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          width: '100%',
          maxWidth: '300px', // Center and restrict button size
        }}
      >
        <Button
          variant="contained"
          onClick={() => onSelectRole('student')}
          style={{
            padding: '15px 30px',
            fontSize: '18px',
            background: 'linear-gradient(90deg, #16a085, #1abc9c)',
            color: '#fff',
            fontWeight: 'bold',
            borderRadius: '30px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          }}
        >
          Student
        </Button>
        <Button
          variant="contained"
          onClick={() => onSelectRole('teacher')}
          style={{
            padding: '15px 30px',
            fontSize: '18px',
            background: 'linear-gradient(90deg, #e74c3c, #c0392b)',
            color: '#fff',
            fontWeight: 'bold',
            borderRadius: '30px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          }}
        >
          Teacher
        </Button>
      </div>

      {/* Footer */}
      <footer
        style={{
          marginTop: '50px',
          paddingTop: '20px',
          borderTop: '1px solid rgba(255, 255, 255, 0.3)',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <p style={{ margin: '10px 0', fontSize: '1rem', color: '#bdc3c7' }}>
          Address: The Cubic Class, Main Market, XYZ Street, Haridwar
        </p>
        <p style={{ margin: '5px 0', fontSize: '1rem', color: '#bdc3c7' }}>
          Instagram: <a href="https://www.instagram.com/tcc_tpc_" style={{ color: '#4fc3f7', textDecoration: 'none' }}>tcc_tpc_</a>
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
