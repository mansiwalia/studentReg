import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';
import DeleteButton from './DeleteButton'; // Import the DeleteButton component
import DownloadButton from './DownloadButton'; // Import the DownloadButton component

const DisplayData = ({ students, onLogout, onDelete }) => {
  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ color: '#1976d2', textAlign: 'center' }}>Student Data</h2>

      {students.length > 0 ? (
        <TableContainer component={Paper} style={{ marginTop: '20px' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Name</strong></TableCell>
                <TableCell><strong>Age</strong></TableCell>
                <TableCell><strong>Gender</strong></TableCell>
                <TableCell><strong>Email</strong></TableCell>
                <TableCell><strong>Phone</strong></TableCell>
                <TableCell><strong>School Name</strong></TableCell>
                <TableCell><strong>Class</strong></TableCell>
                <TableCell><strong>Father's Name</strong></TableCell>
                <TableCell><strong>Father's Phone</strong></TableCell>
                <TableCell><strong>Father's Occupation</strong></TableCell>
                <TableCell><strong>Mother's Name</strong></TableCell>
                <TableCell><strong>Mother's Phone</strong></TableCell>
                <TableCell><strong>Mother's Occupation</strong></TableCell>
                <TableCell><strong>Action</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((student, index) => (
                <TableRow key={index}>
                  <TableCell>{student.name || 'N/A'}</TableCell>
                  <TableCell>{student.age || 'N/A'}</TableCell>
                  <TableCell>{student.gender || 'N/A'}</TableCell>
                  <TableCell>{student.email || 'N/A'}</TableCell>
                  <TableCell>{student.phone || 'N/A'}</TableCell>
                  <TableCell>{student.schoolName || 'N/A'}</TableCell>
                  <TableCell>{student.currentClass || 'N/A'}</TableCell>
                  <TableCell>{student.fatherName || 'N/A'}</TableCell>
                  <TableCell>{student.fatherPhone || 'N/A'}</TableCell>
                  <TableCell>{student.fatherOccupation || 'N/A'}</TableCell>
                  <TableCell>{student.motherName || 'N/A'}</TableCell>
                  <TableCell>{student.motherPhone || 'N/A'}</TableCell>
                  <TableCell>{student.motherOccupation || 'N/A'}</TableCell>
                  <TableCell>
                    {/* Use DeleteButton component */}
                    <DeleteButton onDelete={() => onDelete(index)} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <p style={{ textAlign: 'center', marginTop: '20px', color: '#888' }}>
          No student data available.
        </p>
      )}

      {/* DownloadButton for exporting data */}
      <DownloadButton data={students} fileName="Student_Data" />

      <Button
        variant="outlined"
        color="secondary"
        fullWidth
        style={{ marginTop: '20px' }}
        onClick={onLogout}
      >
        Logout
      </Button>
    </div>
  );
};

export default DisplayData;
