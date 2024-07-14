import { useNavigate } from 'react-router-dom'

function Search() {
    const navigate = useNavigate();
    const handleSearchClick = () => {
        navigate('/search');
    }

    return(
        <div>
            <form className="search-form">
                <div className="search-container">
                    <input className="search" 
                        type="search" 
                        placeholder="장소를 검색하세요" 
                        onClick={handleSearchClick}/>
                    <button className="search-btn" type="submit"/>
                </div>
            </form>
        </div>
    )
}

export default Search