import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { touristSpots } from '../data';

const Map = ({ selectedSpot, onSelectSpot }) => {
  useEffect(() => {
    const script = document.createElement('script');
    const apiKey = process.env.REACT_APP_KAKAO_MAP_API_KEY; // .env 파일에서 API 키를 가져옴
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`;
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
        zIndex: 1,
      }}
    />
  );
};

export default Map;
