import { useNavigate } from "react-router-dom";

const BottomNav = () => {
  const navigate = useNavigate()
  const handleMapClick = () => {
    navigate('/')
  }
  
  return (
    <nav className="bottom-nav">
      <button className="nav-button" onClick={handleMapClick}>지도</button>
      <button className="nav-button">북마크</button>
      <button className="nav-button">커뮤니티</button>
      <button className="nav-button">My</button>
    </nav>
  );
};

export default BottomNav