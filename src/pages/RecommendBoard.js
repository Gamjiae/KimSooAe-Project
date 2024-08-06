import { useState } from 'react'
import Category from '../components/Category'
import BottomNav from '../components/BottomNav'
import search from '../images/search.png'
import pencil from '../images/pencil.png'
import profile from '../images/profile.png'
import comment from '../images/comment.png'
import heart from '../images/heart.png'
import bookmark from '../images/blueBookmark.png'

function RecommendBoard() {
    const [modalOpen, setModalOpen] = useState(false);

    const name = '지애'
    const time = '15:33'
    const content = '햄버거 맛집 추천해주세요!'
    const commentNum = 7
    const heartNum = 3
    const bookmarkNum = 17

    return (
        <div>
            {/* 상단바 */}
            <div className="relative p-[15px] flex justify-between items-center w-full h-[50px]">
                <Category modalOpen={modalOpen} setModalOpen={setModalOpen} />
                <span className="font-medium text-lg">추천 게시판</span>
                <button className="w-[30px] h-[30px] bg-cover" style={{backgroundImage: `url(${search})`}} />
            </div>
            {/* 중앙바 */}
            <div className="relative p-[15px] flex justify-between items-center w-full h-[70px] border-b border-gray">
                <span>나만의 리스트를 공유해보세요!</span>
                <button className="w-24 h-[33px] bg-blue rounded-md text-white flex items-center justify-center">
                    <img src={pencil} alt="pencil" className="w-[19px] h-[19px] mr-2" />
                    글 작성
                </button>
            </div>
            {/* 글 영역 */}
            <div className="flex flex-col w-full p-[15px] border-b border-gray">
                <div className="flex justify-between items-center w-full h-6 text-sm">
                    <div className="flex items-center">
                        <div className="w-5 h-5 bg-cover mr-[10px]" style={{backgroundImage: `url(${profile})`}}></div>
                        <span className="text-neutral-700">{name}</span>
                    </div>
                    <span>{time}</span>
                </div>
                
                <span className='text-sm mt-2'>{content}</span>
                
                <div className='flex justify-between mt-2'>
                    <div className='flex items-center text-xs'>
                        <img className='w-[15px] h-[15px] mr-1' src={comment}/>
                        <span>{commentNum}</span>
                        <img className='w-[15px] h-[15px] ml-1 mr-1' src={heart}/>{heartNum}
                    </div>
                    <div className='flex items-center text-xs'>
                        <img className='w-[15px] h-[15px] mr-1' src={bookmark} />
                        <span>{bookmarkNum}</span>
                    </div>
                </div>
            </div>
            {!modalOpen && <BottomNav />}
        </div>
    )
}

export default RecommendBoard