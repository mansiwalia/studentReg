import { Button } from '@mui/material';
import React from 'react';

const DeleteButton = ({ onDelete }) => {
  return (
    <Button
      variant="contained"
      color="error"
      size="small"
      onClick={onDelete}
    >
      Delete
    </Button>
  );
};

export default DeleteButton;
