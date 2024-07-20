import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useKeyword } from '../context/KeywordContext';
import { useKeywords } from '../context/KeywordsContext';
import Map from '../components/Map';
import styled from 'styled-components';
import backImg from '../images/back.png';
import closeImg from '../images/close.png';

const Container = styled.div`
  position: relative;
  display: flex;
  background-color: white;
  align-items: center;
  padding: 10px 20px;
  z-index: 3;
`;

const ArrowIcon = styled.button`
  width: 9px;
  height: 17px;
  background-image: url(${backImg});
  background-size: contain;
  background-color: white;
  margin-right: 16px;
`;

const Input = styled.input`
  flex: 1;
  background-color: #fff;
  font-weight: 700;
  font-size: 17px;
  box-sizing: border-box;
  border: none;
  outline: none;
`;

const CloseIcon = styled.button`
  width: 13px;
  height: 13px;
  background-image: url(${closeImg});
  background-color: white;
`;

const ResultsContainer = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  max-height: 50%;
  overflow-y: auto;
  background-color: white;
  z-index: 2;
`;

const ResultItem = styled.div`
  display: flex;
  justify-content: space-between; /* 제목과 버튼을 양 끝으로 배치 */
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;
const ResultDetails = styled.div`
  flex: 1; /* 제목과 주소가 가능한 최대 공간을 차지하게 함 */
`;
const AddButton = styled.button`
  background-color: #007bff; /* 버튼 색상 설정 */
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #0056b3; /* 버튼 호버 색상 설정 */
  }
`;
function ResultPage() {
  const { keyword, setKeyword } = useKeyword();
  const { keywords, setKeywords } = useKeywords();
  const [places, setPlaces] = useState([]);
  const [locationIconBottom, setLocationIconBottom] = useState('80px'); 
  const resultsContainerRef = useRef(null); // ResultContainer의 높이를 구하기 위함 
  const location = useLocation();
  const stateKeyword = location.state?.keyword || '';
  const navigate = useNavigate(); 

  useEffect(() => {
    if (stateKeyword) {
      setKeyword(stateKeyword); // 전달된 keyword로 상태 업데이트
    }
  }, [stateKeyword, setKeyword]);

  useEffect(() => {
    localStorage.setItem('keywords', JSON.stringify(keywords));
  }, [keywords]);

  const handleKeyword = (e) => setKeyword(e.target.value);

  const handleEnter = (e) => {
    if (keyword && e.keyCode === 13) {
      onAddKeyword(keyword);
    }
  };

  const onAddKeyword = (text) => {
    const newKeyword = {
      id: Date.now(),
      text: text,
    };
    setKeywords([newKeyword, ...keywords]);
  };

  const handleBackClick = () => {
    setKeyword('');
    navigate(-1);
  };

  const handleCloseClick = () => {
    setKeyword('');
    navigate('/');
  };

  const handlePlacesChange = (places) => {
    setPlaces(places);
  };

  useEffect(() => {
    if (resultsContainerRef.current) {
      const resultsHeight = resultsContainerRef.current.offsetHeight;
      setLocationIconBottom(`${resultsHeight + 10}px`);
    }
  }, [places]);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Container>
        <ArrowIcon onClick={handleBackClick} />
        <Input
          placeholder="장소 검색"
          onClick={() => navigate('/search')}
          value={keyword}
        />
        <CloseIcon onClick={handleCloseClick} />
      </Container>
      <Map
        keyword={keyword}
        onPlacesChange={handlePlacesChange}
        locationIconPosition={{ bottom: locationIconBottom, left: '20px' }}
      />
      <ResultsContainer ref={resultsContainerRef}>
        {places.map((place) => (
          <ResultItem key={place.id}>
            <ResultDetails>
              <h4>{place.place_name}</h4>
              <p>{place.road_address_name || place.address_name}</p>
            </ResultDetails>
            <AddButton onClick={() => navigate('/addbookmark')}>추가</AddButton>
          </ResultItem>
        ))}
      </ResultsContainer>
    </div>
  );
}

export default ResultPage;