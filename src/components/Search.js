function Search() {
    return(
        <div>
            <form className="search-form">
                <div className="search-container">
                    <input className="search" 
                        type="search" 
                        placeholder="장소를 검색하세요" />
                    <button className="search-btn" type="submit"/>
                </div>
            </form>
        </div>
    )
}

export default Search