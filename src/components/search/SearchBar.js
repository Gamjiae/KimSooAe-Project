import { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import back from '../../images/back.png';
import remove from '../../images/remove.png';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 2px solid #000;
`;

const ArrowIcon = styled(Link)`
  width: 9px;
  height: 17px;
  background-image: url(${back});
  background-size: cover;
  margin-right: 16px; /* 아이콘과 입력창 사이의 간격 */
`;

const RemoveIcon = styled.span`
  width: 18px;
  height: 17px;
  background-image: url(${remove});
  background-size: cover;
  color: transparent;
  margin-left: 20px; /* 입력창과 제거 아이콘 사이의 간격 */
`;

const Input = styled.input`
  flex: 1; /* 남은 공간을 모두 차지하도록 설정 */
  background-color: #fff;
  font-weight: 700;
  font-size: 17px;
  box-sizing: border-box;
  border: none;
  outline: none;

  ${({ active }) =>
    active &&
    `
    padding-right: 25px; 
  `}
`;

function SearchBar({ onAddKeyword }) {
    const [keyword, setKeyword] = useState('')
    const navigate = useNavigate();

    const handleKeyword = (e) => setKeyword(e.target.value)
    
    const handleEnter = (e) => {
      if (keyword && e.keyCode === 13) { // 13은 엔터키
          onAddKeyword(keyword)
          setKeyword('')
          // useNavigate('/')
      }
    }

    const handleClearKeyword = () => setKeyword('')

    const hasKeyword = !!keyword
    {
        console.log(!!keyword)
    }
    
    return (
        <Container>
            <ArrowIcon to="/" />
            <Input 
                placeholder="장소 검색"
                active={hasKeyword}
                onChange={handleKeyword}
                onKeyDown={handleEnter} 
                value={keyword}
            />
            {keyword && <RemoveIcon onClick={handleClearKeyword} />}
        </Container>
    );
}

export default SearchBar;