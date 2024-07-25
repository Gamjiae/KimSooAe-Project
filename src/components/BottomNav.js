import { useNavigate, useLocation } from "react-router-dom"
import styled from 'styled-components'
import map from '../images/map.png'
import bookmark from '../images/bookmark.png'
import { GrGroup } from "react-icons/gr"
import my from '../images/my.png'

const Btn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  cursor: pointer;
  padding: 5px;
  background: none;
  border: none;
  background-repeat: no-repeat; 
  transition: background-color 0.3s ease;
  
  div {
    width: 50px;
    height: 3px;
    margin-bottom: 3px;
    background-color: ${props => props.active ? '#028AF2' : ''};
  }

  span {
    margin-top: 3px;
    color: ${props => props.active ? '#028AF2' : ''};
  }
  
  img {
    filter: ${props => props.active ? 'invert(39%) sepia(91%) saturate(4760%) hue-rotate(186deg) brightness(95%) contrast(96%)' : 'none'};
  }
  
  .icon {
    color: ${props => props.active ? '#028AF2' : '#474747'};
  }
`

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="fixed bottom-0 w-full bg-white flex justify-around items-center z-10">
      <Btn onClick={() => navigate('/')} active={currentPath === '/'}>
        <div />
        <img src={map} alt="지도" />
        <span>지도</span>
      </Btn>
      <Btn onClick={() => navigate('/bookmark')} active={currentPath === '/bookmark'}>
        <div />
        <img src={bookmark} alt="북마크"/>
        <span>북마크</span>
      </Btn>
      <Btn onClick={() => navigate('/community')} active={currentPath === '/community'}>
    <div />
        <GrGroup className='w-[25px] h-[25px] icon' />
        <span>커뮤니티</span>
      </Btn>
      <Btn onClick={() => navigate('/my')} active={currentPath === '/my'}>
        <div />
        <img src={my} alt="My" style={{width: '20px', height: '22px'}}/>
        <span>My</span>
      </Btn>
    </div>
  );
};

export default BottomNav;
