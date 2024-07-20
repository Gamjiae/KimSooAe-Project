import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import close from '../../images/close.png'
import place from '../../images/place.png'

const HeaderContainer = styled.div`
  overflow: hidden;
  padding: 16px;
`

// KeywordContainer에 flex 속성 추가
const KeywordContainer = styled.li`
  display: flex;
  overflow: hidden;
  height: 43px;
  border-bottom: 1px solid #666;
  
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`
const RemoveButton = styled.button`
  margin-left: auto; /* 오른쪽으로 붙임 */
  margin-right: 13px; /* 버튼과 PlaceIcon 사이 간격 */
  width: 13px;
  height: 13px;
  background-image: url(${close});
  background-color: white;
`

const Keyword = styled.span`
  margin-left: 30px; /* 왼쪽 여백 설정 */
  font-size: 17px;
  font-weight: 400;
  flex: 1; /* Keyword가 가능한 한 많은 공간 차지하도록 설정 */
`

function History({ keywords, onRemoveKeyword, onClearKeywords }) {
  const navigate = useNavigate();
  
  const handleKeywordClick = (keyword) => {
    navigate('/result', { state: {keyword} });
  }

  console.log('keyword', keywords)
  if (keywords.length === 0) {
    return (<HeaderContainer>최근 검색된 기록이 없습니다.</HeaderContainer>)
  }
  return (
    <div>
      <HeaderContainer>
        <span className='left-4 text-[15px] text-base flex-1 text-gray-500'>검색 기록</span>
        <span className='float-right text-gray-500' onClick={onClearKeywords}>전체삭제</span>
      </HeaderContainer>
      <ul className='p-0'>
        {keywords.map(({ id, text }) => {
          return (
            <KeywordContainer key={id} onClick={() => handleKeywordClick(text)}>
              <div 
                className='w-[23px] h-[25px] ml-[13px] bg-white' 
                style={{ backgroundImage: `url(${place})`}} 
              />
              <span className='ml-[30px] text-[17px] font-normal'>{text}</span>
              <RemoveButton onClick={() => {
                  onRemoveKeyword(id)
                }} />
            </KeywordContainer>
          )
        })}
      </ul>
    </div>
  )
}

export default History
