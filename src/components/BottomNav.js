import { useNavigate } from "react-router-dom";

const BottomNav = () => {
  const navigate = useNavigate()
  
  return (
    <nav className="bottom-nav">
      <button className="nav-button" onClick={() => navigate('/')}>지도</button>
      <button className="nav-button" onClick={() => navigate('/bookmark')}>북마크</button>
      <button className="nav-button" onClick={() => navigate('/community')}>커뮤니티</button>
      <button className="nav-button" onClick={() => navigate('/my')}>My</button>
    </nav>
  );
};

export default BottomNav