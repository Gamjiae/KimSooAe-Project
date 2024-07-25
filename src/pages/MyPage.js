import { useState } from 'react'
import { Link } from 'react-router-dom'
import BottomNav from "../components/BottomNav"
import profile from '../images/profile.png'
import toggle from '../images/toggle(2).png'

function MyPage() {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div>
            <div className="absolute left-[26px] top-14 flex items-center">
                <img src={profile} className="w-10 h-10 mr-4" alt='profile' />
                <div>
                    <div>나는야 김수애</div>
                    <div className="flex space-x-2">
                        <div>게시물 0</div>
                        <div>팔로워 0</div>
                        <div>팔로잉 0</div>
                    </div>
                </div>
            </div>
            <button className="absolute top-[115px] mt-[9px] bg-stone-200 w-11/12 mx-auto left-0 right-0">프로필 수정</button>

            <div className="absolute top-[177px] w-full flex flex-col space-y-4">
                <hr className="border-gray-300" />
                <div className="flex flex-col ml-[26px] space-y-4">
                    <span className="font-semibold">활동 관리</span>
                    <Link>댓글 관리</Link>
                    <Link>게시글 관리</Link>
                </div>

                <hr className="border-gray-300" />
                <div className="flex flex-col ml-[26px] space-y-4">
                    <span className="font-semibold">설정</span>
                    <Link>계정 관리</Link>
                    <Link>알림 수신 설정</Link>
                    <div className="flex justify-between pr-[26px]">
                        <span>다크 모드</span>
                        <button
                            className={`w-[35px] h-[35px] ${isToggled ? 'rotate-180' : ''}`}
                            style={{ backgroundImage: `url(${toggle})` }}
                            onClick={handleToggle}
                        />
                    </div>
                </div>

                <hr className="border-gray-300" />
                <div className="flex flex-col ml-[26px] space-y-4">
                    <span className="font-semibold">계정 관리</span>
                    <Link>로그아웃</Link>
                    <Link>탈퇴하기</Link>
                </div>
            </div>
            <BottomNav />
        </div>
    )
}

export default MyPage
