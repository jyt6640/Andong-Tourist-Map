import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const SpotModal = ({ spot, open, onClose }) => {
  if (!spot) return null;

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{spot.name}</DialogTitle>
      <DialogContent>
        <img src={spot.imageUrl} alt={spot.name} style={{ width: '100%' }} />
        <p>{spot.description}</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          닫기
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SpotModal;
