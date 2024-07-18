export const addKeywordToLocalStorage = (text, keywords, setKeywords) => {
    const newKeyword = {
        id: Date.now(),
        text: text,
    };
    const updatedKeywords = [newKeyword, ...keywords];
    setKeywords(updatedKeywords);
    localStorage.setItem('keywords', JSON.stringify(updatedKeywords));
};