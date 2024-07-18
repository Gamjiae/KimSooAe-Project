import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
  margin-right: 16px;
`;

const RemoveIcon = styled.span`
  width: 18px;
  height: 17px;
  background-image: url(${remove});
  background-size: cover;
  color: transparent;
  margin-left: 20px;
`;

const Input = styled.input`
  flex: 1;
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

function SearchBar({ onAddKeyword, keyword, setKeyword }) {
    const handleKeyword = (e) => setKeyword(e.target.value);
    
    const handleEnter = (e) => {
      if (keyword && e.keyCode === 13) {
          onAddKeyword(keyword);
      }
    }

    const handleClearKeyword = () => setKeyword('');

    const hasKeyword = !!keyword;
    
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
