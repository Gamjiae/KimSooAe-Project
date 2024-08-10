import { useNavigate } from 'react-router-dom'
import back from '../images/back.png'

function SignOutPage() {
    const navigate = useNavigate();

    return (
        <div>
            {/* 헤더 */}
            <div className="relative flex items-center justify-center p-[15px]">
                <img className="absolute w-[9px] h-[17px] left-[19px]" src={back} onClick={() => navigate(-1)} alt="back" />
                <span className="text-center">탈퇴하기</span>
            </div>

            {/* 본문 */}
            <div className="p-[15px]">
                <span>SooAe를 탈퇴하기 전에 다음 내용을 읽어주세요.</span>
                <ul>
                    <li>내 프로필, 친구 목록 등 모든 정보가 사라지고 복구가 불가능합니다.</li>
                    <li>음</li>
                    <li>음</li>
                </ul>
            </div>

        </div>
    )
}

export default SignOutPage