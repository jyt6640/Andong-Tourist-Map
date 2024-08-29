import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import Map from './components/Map';
import Sidebar from './components/Sidebar';
import DetailPanel from './components/DetailPanel';
import TopBar from './components/TopBar';
import { touristSpots } from './data';

function App() {
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [selectedTheme, setSelectedTheme] = useState('history');

  const handleSelectSpot = (spot) => {
    if (selectedSpot === spot) {
      setSelectedSpot(null); // 선택 해제
    } else {
      setSelectedSpot(spot); // 새로운 선택
      // 테마 자동 선택 (선택된 관광지의 테마를 기준으로)
      const theme = Object.keys(touristSpots).find((theme) =>
        touristSpots[theme].includes(spot)
      );
      setSelectedTheme(theme || 'history');
    }
  };

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
    setSelectedSpot(null); // 테마 변경 시 선택된 관광지 초기화
  };

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <TopBar />
      <Grid container sx={{ flex: 1 }}>
        <Grid item xs={3} sx={{ boxShadow: '2px 0 8px rgba(0, 0, 0, 0.1)' }}>
          <Sidebar
            onSelectSpot={handleSelectSpot}
            selectedSpot={selectedSpot}
            selectedTheme={selectedTheme}
            onThemeChange={handleThemeChange}
          />
        </Grid>
        <Grid item xs={9} container sx={{ boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)' }}>
          <Grid item xs={selectedSpot ? 8 : 12}>
            <Map
              selectedSpot={selectedSpot}
              onSelectSpot={handleSelectSpot}
            />
          </Grid>
          {selectedSpot && (
            <Grid item xs={4} sx={{ boxShadow: '-2px 0 8px rgba(0, 0, 0, 0.1)' }}>
              <DetailPanel spot={selectedSpot} />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
