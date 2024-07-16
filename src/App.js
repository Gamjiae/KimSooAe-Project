import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import MapPage from './pages/MapPage'
import SearchPage from './pages/SearchPage'
import AddBookmarkPage from './pages/AddBookmarkPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MapPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/addbookmark" element={<AddBookmarkPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;