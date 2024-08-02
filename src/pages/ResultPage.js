import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useKeyword } from '../context/KeywordContext';
import { useKeywords } from '../context/KeywordsContext';
import Map from '../components/Map';
import backImg from '../images/back.png';
import closeImg from '../images/close.png';
import { RiErrorWarningLine } from 'react-icons/ri'; // 오류 아이콘 추가
import { MdOutlineBookmarkAdd } from "react-icons/md";

function ResultPage() {
  const { keyword, setKeyword } = useKeyword();
  const { keywords, setKeywords } = useKeywords();
  const [places, setPlaces] = useState([]); // 검색 결과
  const [locationIconBottom, setLocationIconBottom] = useState('80px'); 
  const resultsContainerRef = useRef(null); // 결과 컨테이너의 높이를 가져오기 위함
  const location = useLocation();
  const stateKeyword = location.state?.keyword || '';
  const navigate = useNavigate(); 

  useEffect(() => {
    if (stateKeyword) {
      setKeyword(stateKeyword);
    }
  }, [stateKeyword, setKeyword]);

  useEffect(() => {
    localStorage.setItem('keywords', JSON.stringify(keywords));
  }, [keywords]);

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
    <div className='w-full h-full'>
      <div className='relative flex bg-white items-center p-[10px] px-[20px] shadow-md shadow-neutral-400 z-30'>
        <button 
          className='w-[9px] h-[17px] bg-contain bg-white mr-4'
          style={{backgroundImage: `url(${backImg})`}} 
          onClick={() => {setKeyword(''); navigate(-1);}} />
        <input
          className='flex-1 bg-white font-bold text-lg box-border border-none outline-none'
          onClick={() => navigate('/search')}
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button
          className='w-[13px] h-[13px] bg-white'
          style={{backgroundImage: `url(${closeImg})`}} 
          onClick={() => {setKeyword(''); navigate('/');}} />
      </div>
      <Map
        keyword={keyword}
        onPlacesChange={handlePlacesChange}
        locationIconPosition={{ bottom: locationIconBottom, left: '20px' }}
      />
      <div
        className='absolute bottom-0 w-full h-full max-h-80 overflow-y-aut bg-white rounded-t-2xl z-20' 
        ref={resultsContainerRef}>
        {places.length === 0 ? (
          <div className='flex flex-col justify-center items-center h-full'>
            <RiErrorWarningLine size={48} color='#9ca3af'/>
            <span>검색 결과가 없습니다.</span>
          </div>
        ) : (
          <>
            <div className='p-[10px] bg-gray-100 text-gray-500 text-sm'>
              검색 결과 {places.length}개
            </div>
            {places.map((place) => (
              <div className='flex justify-between items-center p-[10px] border-b border-b-gray' key={place.id}>
                <div className='flex flex-col'>
                  <span className='text-base font-medium mb-1'>{place.place_name}</span>
                  <span className='text-xs text-gray-600 border-b border-b-gray'>{place.road_address_name || place.address_name}</span>
                </div>
                <button 
                  className='flex bg-[#028af2] color text-white border-none p-[5px] px-[10px] rounded cursor-pointer text-sm hover:bg-blue-700 pr-1 pl-1'
                  onClick={() => navigate('/addbookmark', {state: {name: place.place_name}})} >
                    추가
                    <MdOutlineBookmarkAdd className='w-[19px] h-[19px] ml-1'/>
                </button>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default ResultPage;
