import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import React, { useState } from 'react';

const StudentForm = ({ onSubmit, onBack }) => {
  const [formData, setFormData] = useState({
    gender: '',
    hasEmail: false,
    hasPhone: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: checked }));
  };

  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        background: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2 style={{ color: '#1976d2', textAlign: 'center' }}>Student Registration Form</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(formData);
        }}
      >
        {/* Student Name */}
        <TextField
          label="Student Name"
          name="name"
          value={formData.name || ''}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          required
          autoComplete="off"
        />

        {/* Date of Birth */}
        <TextField
          type="date"
          label="Date of Birth"
          name="dob"
          value={formData.dob || ''}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          required
          InputLabelProps={{ shrink: true }}
          autoComplete="off"
        />

        {/* Age */}
        <TextField
          label="Age"
          name="age"
          value={formData.age || ''}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          required
          autoComplete="off"
        />

        {/* Gender */}
        <TextField
          label="Gender (Male/Female)"
          name="gender"
          value={formData.gender || ''}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          required
          autoComplete="off"
        />

        {/* Email Checkbox */}
        <FormControlLabel
          control={
            <Checkbox
              name="hasEmail"
              checked={formData.hasEmail}
              onChange={handleCheckboxChange}
            />
          }
          label="Do you have an email ID?"
        />
        {formData.hasEmail && (
          <TextField
            label="Email Address"
            name="email"
            value={formData.email || ''}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            required
            autoComplete="off"
          />
        )}

        {/* Phone Checkbox */}
        <FormControlLabel
          control={
            <Checkbox
              name="hasPhone"
              checked={formData.hasPhone}
              onChange={handleCheckboxChange}
            />
          }
          label="Do you have a phone number?"
        />
        {formData.hasPhone && (
          <TextField
            label="Phone Number"
            name="phone"
            value={formData.phone || ''}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            required
            autoComplete="off"
          />
        )}

        {/* Current School Name */}
        <TextField
          label="Current School Name"
          name="schoolName"
          value={formData.schoolName || ''}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          required
          autoComplete="off"
        />

        {/* Current Class */}
        <TextField
          label="Current Class"
          name="currentClass"
          value={formData.currentClass || ''}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          required
          autoComplete="off"
        />

        {/* Home Address */}
        <TextField
          label="Home Address"
          name="homeAddress"
          value={formData.homeAddress || ''}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          required
          autoComplete="off"
        />

        {/* Father's Information */}
        <TextField
          label="Father's Name"
          name="fatherName"
          value={formData.fatherName || ''}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          required
          autoComplete="off"
        />
        <TextField
          label="Father's Phone Number"
          name="fatherPhone"
          value={formData.fatherPhone || ''}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          required
          autoComplete="off"
        />
        <TextField
          label="Father's Occupation"
          name="fatherOccupation"
          value={formData.fatherOccupation || ''}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          required
          autoComplete="off"
        />

        {/* Mother's Information */}
        <TextField
          label="Mother's Name"
          name="motherName"
          value={formData.motherName || ''}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          required
          autoComplete="off"
        />
        <TextField
          label="Mother's Phone Number"
          name="motherPhone"
          value={formData.motherPhone || ''}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          required
          autoComplete="off"
        />
        <TextField
          label="Mother's Occupation"
          name="motherOccupation"
          value={formData.motherOccupation || ''}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          required
          autoComplete="off"
        />

        {/* Submit and Back Buttons */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: '20px' }}
        >
          Submit
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          fullWidth
          style={{ marginTop: '10px' }}
          onClick={onBack}
        >
          Back to Home
        </Button>
      </form>
    </div>
  );
};

export default StudentForm;
