import { useState, useEffect } from 'react';
import styled from 'styled-components';
import location from '../images/location.png';

const { kakao } = window;

const LocationIcon = styled.button`
  width: 45px;
  height: 45px;
  background-image: url(${location});
  background-size: cover;
  background-color: transparent;
  position: absolute;
  bottom: 80px;
  left: 20px;
  z-index: 3;
`;

function Map({ keyword }) {
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
        }
      });
    }
  }, [location, keyword]); // keyword를 의존성 배열에 추가

  // 검색결과 목록, 마커 표출
  const displayPlaces = (places, map) => {
    const bounds = new kakao.maps.LatLngBounds();
    removeMarkers(); // 기존 마커 제거

    const newMarkers = places.map((place, index) => {
      const placePosition = new kakao.maps.LatLng(place.y, place.x);
      const marker = createMarker(placePosition, index, map);
      bounds.extend(placePosition);
      return marker;
    });

    setMarkers(newMarkers);
    map.setBounds(bounds);
  };

  // 마커 생성, 지도 위에 마커 표시
  const createMarker = (position, index, map) => {
    const imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png';
    const imageSize = new kakao.maps.Size(36, 37);
    const imgOptions = {
      spriteSize: new kakao.maps.Size(36, 691),
      spriteOrigin: new kakao.maps.Point(0, (index * 46) + 10),
      offset: new kakao.maps.Point(13, 37),
    };
    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions);
    const marker = new kakao.maps.Marker({
      position,
      image: markerImage,
    });
    marker.setMap(map);
    return marker;
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
    map.setCenter(new kakao.maps.LatLng(location.lat, location.lng));
  }

  return (
      <div id="map">
        <LocationIcon onClick={handleLocationClick} />
      </div>
      
  );
}

export default Map;