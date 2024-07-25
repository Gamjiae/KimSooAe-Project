import { useNavigate } from "react-router-dom"

function SignUpSuccessPage() {
    const navigate = useNavigate()

    return (
        <div>
            <span className='relative left-[37px] top-12 text-2xl font-semibold mb-[52px]'>
                가입 완료!<br />
                SooAe를 시작해볼까요?
            </span>
            <button className="relative left-[37px] mt-[150px] w-5/6 h-[47px] bg-my-color text-white font-semibold text-xl" onClick={() => navigate('/login')}>
                로그인
            </button>
        </div>
    )
}

export default SignUpSuccessPage