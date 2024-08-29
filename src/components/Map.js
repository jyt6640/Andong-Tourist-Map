import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { touristSpots } from '../data';

const Map = ({ selectedSpot, onSelectSpot }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=bdf86abb0427674d9d321fc6401555db&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById('map');
        const mapOption = {
          center: new window.kakao.maps.LatLng(36.5683, 128.7293), // 안동 중심 좌표
          level: 7,
        };

        const map = new window.kakao.maps.Map(mapContainer, mapOption);

        Object.values(touristSpots).flat().forEach((spot) => {
          const markerPosition = new window.kakao.maps.LatLng(spot.lat, spot.lng);
          const marker = new window.kakao.maps.Marker({
            position: markerPosition,
            title: spot.name,
          });
          marker.setMap(map);

          window.kakao.maps.event.addListener(marker, 'click', () => {
            onSelectSpot(spot);
          });
        });

        if (selectedSpot) {
          const moveLatLon = new window.kakao.maps.LatLng(selectedSpot.lat, selectedSpot.lng);
          map.panTo(moveLatLon);
        }
      });
    };
  }, [selectedSpot, onSelectSpot]);

  return (
    <Box
      id="map"
      sx={{
        width: '100%',
        height: '100%',
        position: 'relative',
        zIndex: 1,  // z-index를 낮게 설정하여 맵이 뒤에 있도록 설정
      }}
    />
  );
};

export default Map;
