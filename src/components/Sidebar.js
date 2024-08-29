import React from 'react';
import { List, ListItem, ListItemText, Typography, Select, MenuItem, Box, Divider } from '@mui/material';
import { touristSpots } from '../data';

const Sidebar = ({ onSelectSpot, selectedSpot, selectedTheme, onThemeChange }) => {
  const handleThemeChange = (event) => {
    onThemeChange(event.target.value);
  };

  const handleSpotClick = (spot) => {
    onSelectSpot(spot);
  };

  return (
    <Box
      sx={{
        padding: 3,
        bgcolor: '#f9f9f9',
        height: '100%',
        overflowY: 'auto',
        boxShadow: '2px 0 8px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        zIndex: 2,  // z-index를 높게 설정하여 사이드바가 맵 위에 보이도록 설정
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: 2, color: '#f57c00', fontWeight: 'bold' }}>
        안동의 명소를 찾아보세요
      </Typography>
      <Select
        value={selectedTheme}
        onChange={handleThemeChange}
        fullWidth
        variant="outlined"
        sx={{ marginBottom: 2, bgcolor: 'white', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}
      >
        <MenuItem value="history">역사</MenuItem>
        <MenuItem value="culture">문화</MenuItem>
        <MenuItem value="nature">자연</MenuItem>
        <MenuItem value="others">기타</MenuItem>
      </Select>
      <Divider sx={{ marginBottom: 2 }} />
      <List component="nav" sx={{ padding: 0 }}>
        {touristSpots[selectedTheme].map((spot, index) => (
          <ListItem
            button
            key={index}
            onClick={() => handleSpotClick(spot)}
            sx={{
              marginBottom: 1,
              bgcolor: selectedSpot === spot ? '#f57c00' : 'white', // 선택된 항목 강조
              color: selectedSpot === spot ? 'white' : 'black',
              borderRadius: 1,
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              '&:hover': {
                backgroundColor: '#f57c00',
                color: 'white',
                transition: 'background-color 0.3s ease-in-out',
              },
            }}
          >
            <ListItemText primary={spot.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
