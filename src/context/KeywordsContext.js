import React, { createContext, useContext, useState, useEffect } from 'react';

const KeywordsContext = createContext();

export function KeywordsProvider({ children }) {
  const [keywords, setKeywords] = useState(
    JSON.parse(localStorage.getItem('keywords') || '[]')
  );

  useEffect(() => {
    localStorage.setItem('keywords', JSON.stringify(keywords));
  }, [keywords]);

  return (
    <KeywordsContext.Provider value={{ keywords, setKeywords }}>
      {children}
    </KeywordsContext.Provider>
  );
}

export function useKeywords() {
  return useContext(KeywordsContext);
}
