import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import search from '../images/search.png'

const SearchForm = styled.form`
    display: flex;
    justify-content: center;
    height: 100vh;
    position: relative;
`
const SearchContainer = styled.div`
    position: relative;
    width: 85%;
    margin-top: 20px;
`
  
const Input = styled.input`
    position: relative;
    z-index: 2;
    width: 100%;
    height: 45px;
    font-size: 17px;
    text-align: center;
    border: none;
    border-radius: 10px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
` 
const SearchIcon = styled.div`
    position: absolute;
    z-index: 2;
    top: 10px;
    right: 15px;
    width: 24px;
    height: 24px;
    background-color: white;
    background-image: url(${search});
    background-size: cover;
`

function Search() {
    const navigate = useNavigate();
    const handleSearchClick = () => {
        navigate('/search');
    }

    return (
        <div>
            <SearchForm>
                <SearchContainer>
                    <Input className="search" 
                        type="search" 
                        placeholder="장소를 검색하세요" 
                        onClick={handleSearchClick} />
                    <SearchIcon />
                </SearchContainer>
            </SearchForm>
        </div>
    )
}

export default Search