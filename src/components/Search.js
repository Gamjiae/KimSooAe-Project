import { useNavigate } from 'react-router-dom'
import search from '../images/search.png'

function Search() {
    const navigate = useNavigate();
    const handleSearchClick = () => {
        navigate('/search');
    }
    return (
        <div>
            <form className='flex justify-center h-screen relative'>
                <div className='relative w-5/6 mt-[20px]'>
                <input 
                    className='relative z-20 w-full h-[45px] text-lg text-center border-none rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.25)]' 
                    type="search" 
                    placeholder="장소를 검색하세요" 
                    onClick={handleSearchClick} 
                />
                <div 
                    className='absolute z-20 top-[10px] right-[15px] w-6 h-6 bg-white bg-cover'
                    style={{backgroundImage: `url(${search})`}} 
                />
                </div>
            </form>
        </div>
    )
}

export default Search