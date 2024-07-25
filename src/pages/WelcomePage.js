import { useNavigate } from 'react-router-dom'

function WelcomePage() {
    const navigate = useNavigate()

    return (
        <div className="absolute flex w-full h-full flex-col items-center">
            <div className="mt-36 w-44 h-44 border border-black mb-16"/>
            <div className="text-center">
                <span className="font-bold text-xl">제목</span><br/>
                <span className="text-lg">본문: 처음 앱 설치시 나오는 화면입니다.</span>
            </div>
            <button className="absolute bottom-[80px] h-12 w-5/6 bg-my-color" onClick={() => navigate('/signup')}>
                <span className="font-bold text-xl text-white">회원가입 하기</span>
            </button>
            <div className='absolute bottom-9'>
                이미 계정이 있나요? 
                <button className="ml-1 text-my-color" onClick={() => navigate('/login')}>로그인</button>
            </div>
        </div>
    )
}
export default WelcomePage