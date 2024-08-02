import { useNavigate } from 'react-router-dom';
import back from '../../images/back.png';
import remove from '../../images/remove.png';

function SearchBar({ onAddKeyword, keyword, setKeyword }) {
  const navigate = useNavigate()

  const handleKeyword = (e) => setKeyword(e.target.value)
  
  const handleEnter = (e) => {
    if (keyword && e.keyCode === 13) {
        onAddKeyword(keyword);
    }
  }

  const handleClearKeyword = () => setKeyword('');

  const hasKeyword = !!keyword
  
  return (
    <div className="flex items-center px-5 py-2.5 border-b-[1px] border-gray">
      <div 
        onClick={() => navigate(-1)} 
        className="w-[9px] h-[17px] bg-cover mr-4" 
        style={{ backgroundImage: `url(${back})` }} 
      />
      <input
        className={`flex-1 bg-white font-bold text-lg box-border border-none outline-none ${hasKeyword ? 'pr-6' : ''}`} 
        placeholder="장소 검색"
        onChange={handleKeyword}
        onKeyDown={handleEnter} 
        value={keyword}
      />
      {keyword && (
        <span 
          className="w-[18px] h-[17px] bg-cover ml-5" 
          style={{ backgroundImage: `url(${remove})` }} 
          onClick={handleClearKeyword}
        />
      )}
    </div>
  );
}

export default SearchBar;
