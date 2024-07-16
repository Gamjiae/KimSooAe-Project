import { useState, useEffect } from "react"
const { kakao } = window

function Map() {
  const [location, setLocation] = useState({ lat: 37.5031571, lng: 126.882408 });

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  // 내 위치 불러오기
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
          console.log('위치 받기 성공');
        },
        () => console.log('위치 받기 실패'),
        options
      );
    }
  }, []);

  // 맵 그리기
  useEffect( () => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(location.lat, location.lng),
      level: 3
    }
    const map = new kakao.maps.Map(container, options);
  }, [])
  
  return (
    <div id="map" style={{position: 'absolute', width: '100%', height: '100%'}}></div>
  )
}

export default Map;