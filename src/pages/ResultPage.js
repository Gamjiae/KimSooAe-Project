import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useKeyword } from '../context/KeywordContext';
import { useKeywords } from '../context/KeywordsContext';
import Map from '../components/Map';
import styled from 'styled-components';
import back from '../images/back.png';
import close from '../images/close.png';

const Container = styled.div`
    position: relative;
    display: flex;
    background-color: white;
    align-items: center;
    padding: 10px 20px;
    border-bottom: 2px solid #000;
    z-index: 3
`;

const ArrowIcon = styled.button`
    width: 9px;
    height: 17px;
    background-image: url(${back});
    background-size: contain;
    background-color: white;
    margin-right: 16px;
`;

const Input = styled.input`
    flex: 1;
    background-color: #fff;
    font-weight: 700;
    font-size: 17px;
    box-sizing: border-box;
    border: none;
    outline: none;
`;

const CloseIcon = styled.button`
    width: 13px;
    height: 13px;
    background-image: url(${close});
    background-color: white;
`
function ResultPage() {
    const { keyword, setKeyword } = useKeyword();
    const { keywords, setKeywords } = useKeywords();
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem('keywords', JSON.stringify(keywords));
    }, [keywords]);

    const handleKeyword = (e) => setKeyword(e.target.value);

    const handleEnter = (e) => {
        if (keyword && e.keyCode === 13) {
            onAddKeyword(keyword);
        }
    };

    const onAddKeyword = (text) => {
        const newKeyword = {
            id: Date.now(),
            text: text,
        };
        setKeywords([newKeyword, ...keywords]);
    };

    const handleBackClick = () => {
        setKeyword(''); // 검색어 초기화
        navigate(-1);   // 뒤로 가기
    };

    const handleCloseClick = () => {
        setKeyword('');
        navigate('/')
    }
    return (
        <div style={{width: '100%', height: '100%'}}>
            <Container>
                <ArrowIcon onClick={handleBackClick} />
                <Input 
                    placeholder="장소 검색"
                    onChange={handleKeyword}
                    onKeyDown={handleEnter} 
                    value={keyword}
                />
                <CloseIcon onClick={handleCloseClick} />
            </Container>
            <Map keyword={keyword} />
        </div>
    );
}

export default ResultPage;