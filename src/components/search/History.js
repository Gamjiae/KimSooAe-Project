import { useNavigate } from 'react-router-dom'
import close from '../../images/close.png'
import place from '../../images/place.png'

function History({ keywords, onRemoveKeyword, onClearKeywords }) {
  const navigate = useNavigate();
  
  const handleKeywordClick = (keyword) => {
    navigate('/result', { state: {keyword} });
  }

  console.log('keyword', keywords)
  if (keywords.length === 0) {
    return (
      <div className='overflow-hidden p-[16px]'>
        최근 검색된 기록이 없습니다.
      </div>
    )
  }
  return (
    <div>
      <div className='overflow-hidden p-[16px]'>
        <span className='left-4 text-[15px] text-base flex-1 text-gray-500'>검색 기록</span>
        <span className='float-right text-gray-500' onClick={onClearKeywords}>전체삭제</span>
      </div>
      <ul className='p-0'>
        {keywords.map(({ id, text }) => {
          return (
            <li
              className='flex overflow-hidden h-[43px] border-b border-gray mb-5 last:mb-0'
              key={id}>
              <div
                className='w-[25px] h-[27px] bg-cover ml-[13px]' 
                style={{ backgroundImage: `url(${place})`}} 
              />
              <span 
                onClick={() => handleKeywordClick(text)} 
                className='ml-[30px] text-[17px] font-normal'>
                {text}
              </span>
              <button 
                className='ml-auto mr-[13px] w-[13px] h-[13px] bg-white'
                style={{backgroundImage: `url(${close})`}}
                onClick={() => onRemoveKeyword(id)} 
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default History
