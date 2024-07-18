import React from 'react'
import styled from 'styled-components'
import close from '../../images/close.png'
import place from '../../images/place.png'

const HeaderContainer = styled.div`
  overflow: hidden;
  padding: 16px;
`

const Title = styled.span`
  left: 16px;
  font-weight: 400;
  font-size: 15px;
  color: #666;
`
const RemoveText = styled.span`
  float: right;
  color: #a7a7a7;
`

const ListContainer = styled.ul`
  padding: 0px;
`

// KeywordContainer에 flex 속성 추가
const KeywordContainer = styled.li`
  display: flex;
  overflow: hidden;
  height: 48px;
  border-bottom: 2px solid #000;
  
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`

const PlaceIcon = styled.div`
  width: 23px;
  height: 25px;
  margin-left: 13px;
  background-image: url(${place});
  background-color: white;
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
  console.log('keyword', keywords)
  if (keywords.length === 0) {
    return (<HeaderContainer>최근 검색된 기록이 없습니다.</HeaderContainer>)
  }
  return (
    <div>
      <HeaderContainer>
        <Title>검색 기록</Title>
        <RemoveText onClick={onClearKeywords}>전체삭제</RemoveText>
      </HeaderContainer>
      <ListContainer>
        {keywords.map(({ id, text }) => {
          return (
            <KeywordContainer key={id}>
              <PlaceIcon />
              <Keyword>{text}</Keyword>
              <RemoveButton onClick={() => {
                  onRemoveKeyword(id)
                }} />
            </KeywordContainer>
          )
        })}
      </ListContainer>
    </div>
  )
}

export default History
