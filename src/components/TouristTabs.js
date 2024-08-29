import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import { touristSpots } from '../data';

const TouristTabs = ({ onSelectSpot }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
    onSelectSpot(touristSpots[newValue]);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs"
      >
        {touristSpots.map((spot, index) => (
          <Tab key={index} label={spot.name} />
        ))}
      </Tabs>
      <Box sx={{ p: 3 }}>
        <Typography>
          {touristSpots[selectedTab].description}
        </Typography>
      </Box>
    </Box>
  );
};

export default TouristTabs;
