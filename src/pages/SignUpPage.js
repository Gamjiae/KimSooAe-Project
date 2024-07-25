import { useNavigate } from 'react-router-dom'

function SignUp () {
    const navigate = useNavigate()

    return (
        <div>
            <span className='absolute left-[37px] top-12 text-2xl font-semibold mb-[52px]'>
                회원가입
            </span>
            <div className='absolute top-[152px] flex flex-col w-full items-center'>
                <input type='text' placeholder='   아이디' className='w-5/6 h-[47px] mb-[14px] border border-black' />
                <input type='password' placeholder='   비밀번호' className='w-5/6 h-[47px] mb-[14px] border border-black' />
                <input type='password' placeholder='   이메일주소' className='w-5/6 h-[47px] mb-[14px] border border-black' />
                <button className="w-5/6 h-[27px] mb-[60px] bg-gray-200">인증받기</button>

                <button className="w-5/6 h-[47px] bg-my-color text-white font-semibold text-xl" onClick={() => navigate('/signupsuccess')}>
                    회원가입
                </button>
            </div>
        </div>
    )
}

export default SignUp