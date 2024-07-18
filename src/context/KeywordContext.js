import { createContext, useState, useContext } from 'react'

const KeywordContext = createContext();

export const useKeyword = () => {
    return useContext(KeywordContext)
}

export const KeywordProvider = ({ children }) => {
    const [keyword, setKeyword] = useState('')
    
    return (
        <KeywordContext.Provider value={{ keyword, setKeyword}}>
            {children}
        </KeywordContext.Provider>
    )
}