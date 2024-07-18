import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MapPage from './pages/MapPage';
import SearchPage from './pages/SearchPage';
import AddBookmarkPage from './pages/AddBookmarkPage';
import ResultPage from './pages/ResultPage';
import { KeywordProvider } from './context/KeywordContext';
import { KeywordsProvider } from './context/KeywordsContext'; // 추가

function App() {
  return (
    <KeywordProvider>
      <KeywordsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MapPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/addbookmark" element={<AddBookmarkPage />} />
            <Route path="/result" element={<ResultPage />} />
          </Routes>
        </BrowserRouter>
      </KeywordsProvider>
    </KeywordProvider>
  );
}

export default App;
