import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { KeywordProvider } from './context/KeywordContext'
import { KeywordsProvider } from './context/KeywordsContext'
import './App.css'
import MapPage from './pages/MapPage'
import SearchPage from './pages/SearchPage'
import AddBookmarkPage from './pages/AddBookmarkPage'
import ResultPage from './pages/ResultPage'
import BookmarkPage from './pages/BookmarkPage'
import CommunityPage from './pages/CommunityPage'
import MyPage from './pages/MyPage'
import LogInPage from './pages/LogInPage'
import WelcomePage from './pages/WelcomePage'
import SignUpPage from './pages/SignUpPage'
import SignUpSuccessPage from './pages/SignUpSuccessPage'

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
            <Route path="/bookmark" element={<BookmarkPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/my" element={<MyPage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signupsuccess" element={<SignUpSuccessPage />} />
          </Routes>
        </BrowserRouter>
      </KeywordsProvider>
    </KeywordProvider>
  );
}

export default App;