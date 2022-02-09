import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Home from '@material-ui/icons/Home';
import Info from '@material-ui/icons/Info';
import { palette } from '@mui/system';

export default function index() {
  return (
    <Box
      sx={{
        maxWidth: '50%'
      }}>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: 1,
          bgcolor: '#ccc'
        }}>

        <Button
          variant="contained"
          onClick={() => {
            alert("Hello");
          }}>
          Hello Button
        </Button>

        <Button
          variant="outlined"
          startIcon={<Info />}
          onClick={() => alert("Info")}>
          Info
        </Button>

        <Button
          variant="text"
          endIcon={<Home />}>
          Home
        </Button>

        <Button color='error'>
          Text 2
        </Button>

      </Box>

    </Box>
  );
}