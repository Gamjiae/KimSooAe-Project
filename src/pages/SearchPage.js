import { useState, useEffect } from 'react'
import History from '../components/search/History'
import SearchBar from '../components/search/SearchBar'
import Map from '../components/Map'

function SearchPage() {
  const [keyword, setKeyword] = useState('')
  const [keywords, setKeywords] = useState(
    JSON.parse(localStorage.getItem('keywords') || '[]'),
  )

  useEffect(() => {
    localStorage.setItem('keywords', JSON.stringify(keywords))
  }, [keywords])

  const handleAddKeyword = (text) => {
    console.log('text', text)
    const newKeyword = {
      id: Date.now(),
      text: text,
    }
    setKeywords([newKeyword, ...keywords])
  }

  const handleRemoveKeyword = (id) => {
    const nextKeyword = keywords.filter((thisKeyword) => {
      return thisKeyword.id != id
    })
    setKeywords(nextKeyword)
  }

  const handleClearKeywords = () => {
    setKeywords([])
  }

  return (
    <div>
      <SearchBar onAddKeyword={handleAddKeyword} keyword={keyword} setKeyword={setKeyword}></SearchBar>
      <History
        keywords={keywords}
        onClearKeywords={handleClearKeywords}
        onRemoveKeyword={handleRemoveKeyword}
      />
    </div>
  )
}

export default SearchPage