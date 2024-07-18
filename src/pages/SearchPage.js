import { useEffect } from 'react';
import History from '../components/search/History';
import SearchBar from '../components/search/SearchBar';
import { useKeyword } from '../context/KeywordContext';
import { useKeywords } from '../context/KeywordsContext';
import { useNavigate } from 'react-router-dom';

function SearchPage() {
  const { keyword, setKeyword } = useKeyword();
  const { keywords, setKeywords } = useKeywords();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('keywords', JSON.stringify(keywords));
  }, [keywords]);

  const handleAddKeyword = (text) => {
    const newKeyword = {
      id: Date.now(),
      text: text,
    };
    setKeywords([newKeyword, ...keywords]);
    setKeyword(text);
    navigate('/result'); // 검색 후 ResultPage로 이동
  };

  const handleRemoveKeyword = (id) => {
    const nextKeyword = keywords.filter((thisKeyword) => {
      return thisKeyword.id !== id;
    });
    setKeywords(nextKeyword);
  };

  const handleClearKeywords = () => {
    setKeywords([]);
  };

  return (
    <div>
      <SearchBar onAddKeyword={handleAddKeyword} keyword={keyword} setKeyword={setKeyword} />
      <History
        keywords={keywords}
        onClearKeywords={handleClearKeywords}
        onRemoveKeyword={handleRemoveKeyword}
      />
    </div>
  );
}

export default SearchPage;