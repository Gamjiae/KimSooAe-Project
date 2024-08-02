import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import back from '../images/back.png';
import menu from '../images/menu.png';
import profile from '../images/profile.png';
import heart from '../images/heart.png';
import bookmark from '../images/bookmark.png';
import heartActive from '../images/filled_heart.png';
import bookmarkActive from '../images/filled_bookmark.png';
import comment from '../images/comment.png';
import send from '../images/send.png';

function PostPage () {
    const [heartNum, setHeartNum] = useState(0);
    const [bookmarkNum, setBookmarkNum] = useState(0);
    const [isHeartActive, setIsHeartActive] = useState(false);
    const [isBookmarkActive, setIsBookmarkActive] = useState(false);

    const navigate = useNavigate();

    const title = '햄버거 맛집 뿌려요 ㅎㅎ';
    const content = '안녕하세요 ^^ 이번에는 서울에 있는 수제버거 맛집 정보를 공유하려 합니다. 제가 직접 가본 곳 중 엄선하여 정리해놨습니다. 다들 방문해보세요 ^^';
    const comments = '우와 잘보고가요 감사합니다.';
    const commentsNum = 3;

    const toggleHeart = () => {
        setHeartNum(isHeartActive ? heartNum - 1 : heartNum + 1);
        setIsHeartActive(!isHeartActive);
    };

    const toggleBookmark = () => {
        setBookmarkNum(isBookmarkActive ? bookmarkNum - 1 : bookmarkNum + 1);
        setIsBookmarkActive(!isBookmarkActive);
    };

    return (
        <div>
            {/* 헤더 */}
            <div className="flex justify-between items-center p-[15px]">
                <img className="w-[9px] h-[17px]" src={back} onClick={() => navigate(-1)} alt="close" />
                <span>공유 게시판</span>
                <img className="w-[3.5px] h-[17px]" src={menu} onClick={() => navigate(-1)} alt="close" />
            </div>

            {/* 글쓴이 프로필 영역  */}
            <div className='flex items-center p-[15px] mt-[15px]'>
                <img className='w-[35px] h-[35px]' src={profile} alt="profile" />
                <div className='flex flex-col ml-2'>
                    <span className='text-sm'>햄버거 러버</span>
                    <span className='text-xs text-gray-600'>15:33</span>
                </div>
            </div>

            {/* 본문 */}
            <div className='p-[15px] w-full border-b border-gray-200 pb-5'>
                <div className='font-semibold mb-[10px]'>{title}</div>
                <div className='text-sm'>{content}</div>
                <div className='w-full h-[55px] mt-5 border border-gray-200'>분위기 좋은 카페 리스트</div>
                
                {/* 좋아요, 책갈피 */}
                <div className='flex items-center mt-[35px]'>
                    <img className='w-5 h-5 mr-1' src={isHeartActive ? heartActive : heart} alt="heart" onClick={toggleHeart} />
                    <span>{heartNum}</span>
                    <img 
                        className='w-5 h-5 ml-[10px] mr-1' 
                        src={isBookmarkActive ? bookmarkActive : bookmark} 
                        alt="bookmark" 
                        style={{ filter: !isBookmarkActive ? 'invert(39%) sepia(91%) saturate(4760%) hue-rotate(186deg) brightness(95%) contrast(96%)' : 'none' }} 
                        onClick={toggleBookmark} 
                    />
                    <span>{bookmarkNum}</span>
                </div>
            </div>

            {/* 댓글 */}
            <div className='p-[15px]'>
                <span className='text-xs text-gray-600'>{commentsNum}개의 댓글</span>
                <div className='flex justify-between mt-5 mb-2'>
                    <div className="flex items-center">
                        <img className="w-5 h-5 bg-cover mr-[10px]" src={profile} alt="profile" />
                        <span className="text-sm mr-1">지애</span>
                        <span className='text-xs text-gray-600'>15:33</span>
                    </div>
                    <div className='flex items-center'>
                        <img className='w-[15px] h-[15px] mr-1' src={isHeartActive ? heartActive : heart} alt="heart" onClick={toggleHeart} />
                        <span>{heartNum}</span>
                        <img 
                            className='w-[3.5px] h-[15px] ml-3' 
                            src={isBookmarkActive ? bookmarkActive : bookmark} 
                            alt="bookmark" 
                            style={{ filter: !isBookmarkActive ? 'invert(39%) sepia(91%) saturate(4760%) hue-rotate(186deg) brightness(95%) contrast(96%)' : 'none' }} 
                            onClick={toggleBookmark} 
                        />
                    </div>
                </div>
                <div>{comments}</div>
                <button className='flex items-center text-gray-600 text-xs mt-1'>
                    <img className='w-[15px] h-[15px] mr-1' src={comment} alt="comment" />
                    답글 쓰기
                </button>
            </div>
            {/* 댓글 입력란 */}
            <div className='flex items-center fixed bottom-3 left-1/2 transform -translate-x-1/2 rounded-md w-11/12 h-[42px] p-3 bg-slate-200 text-sm text-gray-600'>
                <img className='w-[25px] h-[25px] mr-2' src={profile} alt="profile" />
                댓글을 입력해주세요.
                <img className='absolute w-5 h-5 right-2' src={send} alt="send" />
            </div>
        </div>
    );
}

export default PostPage;
