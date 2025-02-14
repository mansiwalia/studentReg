import { Button } from '@mui/material';
import React from 'react';
import * as XLSX from 'xlsx';

const DownloadButton = ({ data, fileName }) => {
  const handleDownload = () => {
    // Create a worksheet from the data
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Student Data');

    // Trigger download of the Excel file
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };

  return (
    <Button
      variant="contained"
      color="primary"
      style={{ marginTop: '10px' }}
      onClick={handleDownload}
    >
      Download Excel
    </Button>
  );
};

export default DownloadButton;
