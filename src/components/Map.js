import { useState, useEffect } from 'react';
import styled from 'styled-components';
import location from '../images/location.png';
import marker from '../images/marker.png'; // marker 이미지 import 추가

const { kakao } = window;

function Map({ keyword, onPlacesChange, locationIconPosition }) {
  const [location, setLocation] = useState({ lat: 37.5031571, lng: 126.882408 });
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState(null);

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  
  // 현재 위치 받아오기
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
        },
        () => console.log('위치 받기 실패'),
        options
      );
    }
  }, []);

  // 지도 그리기
  useEffect(() => {
    const container = document.getElementById('map');
    const mapOptions = {
      center: new kakao.maps.LatLng(location.lat, location.lng),
      level: 3,
    };
    const mapInstance = new kakao.maps.Map(container, mapOptions);
    setMap(mapInstance);

    // 장소 검색
    if (keyword) {
      const ps = new kakao.maps.services.Places();
      // 장소 검색 요청
      ps.keywordSearch(keyword, (data, status, pagination) => {
        if (status === kakao.maps.services.Status.OK) {
          displayPlaces(data, mapInstance);
          onPlacesChange(data); // 검색 결과를 ResultPage로 전달 
        }
      });
    }
  }, [location, keyword]);

  // 검색결과 목록, 마커 표출
  const displayPlaces = (places, map) => {
    const bounds = new kakao.maps.LatLngBounds();
    removeMarkers(); // 기존 마커 제거

    const newMarkers = places.map((place, index) => {
      const placePosition = new kakao.maps.LatLng(place.y, place.x);
      const marker = createMarker(placePosition, map);
      bounds.extend(placePosition);

      return marker;
    });

    setMarkers(newMarkers);
    map.setBounds(bounds);
  };

  // 마커 생성, 지도 위에 마커 표시
  const createMarker = (position, map) => {
    // const imageSrc = marker; // 새로운 마커 이미지 사용
    // const imageSize = new kakao.maps.Size(23, 34); // 마커 이미지 크기 설정
    const markerImage = new kakao.maps.MarkerImage(marker, new kakao.maps.Size(25, 34));
    const markerInstance = new kakao.maps.Marker({
      position,
      image: markerImage,
    });
    markerInstance.setMap(map);
    return markerInstance;
  };

  const removeMarkers = () => {
    markers.forEach(marker => marker.setMap(null));
    setMarkers([]);
  };

  // keyword 값 콘솔에 출력
  useEffect(() => {
    console.log("Keyword:", keyword);
  }, [keyword]); // keyword를 의존성 배열에 추가

  // 현재 위치로 이동
  const handleLocationClick = () => {
    console.log('Current Location:', location);
    map.setCenter(new kakao.maps.LatLng(location.lat, location.lng));
  }

  return (
    <div id="map" style={{ width: '100%', height: '100%' }}>
      <LocationIcon 
        onClick={handleLocationClick}
        bottom={locationIconPosition?.bottom}
        left={locationIconPosition?.left}
      />
    </div>
  );
}

const LocationIcon = styled.button`
  width: 45px;
  height: 45px;
  background-image: url(${location});
  background-size: cover;
  background-color: transparent;
  position: absolute;
  bottom: ${(props) => props.bottom || '80px'};
  left: ${(props) => props.left || '20px'};
  z-index: 3;
`;

export default Map;
