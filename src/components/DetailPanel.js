import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Divider } from '@mui/material';

const DetailPanel = ({ spot }) => {
  if (!spot) {
    return (
      <Box sx={{ padding: 3, textAlign: 'center', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', position: 'relative', zIndex: 2 }}>
        <Typography variant="h6" color="textSecondary">
          관광지를 선택하세요.
        </Typography>
      </Box>
    );
  }

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', position: 'relative', zIndex: 2 }}>
      <CardMedia
        component="img"
        height="200"
        image={spot.imageUrl || 'https://via.placeholder.com/300'}
        alt={spot.name}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" gutterBottom>
          {spot.name}
        </Typography>
        <Typography variant="body1" paragraph>
          {spot.description}
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <Typography variant="body2" color="textSecondary">
          <strong>위치:</strong> {spot.lat}, {spot.lng}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DetailPanel;
