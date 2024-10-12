import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const TopBar = () => {
  return (
    <AppBar position="static" sx={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', zIndex: 3 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          안동 관광지도
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body1" sx={{ marginRight: 2 }}>
            Andong so Happy 🌤️
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
