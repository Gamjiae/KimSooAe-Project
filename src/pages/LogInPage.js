import { useNavigate } from "react-router-dom"

function LogInPage() {
    const navigate = useNavigate()

    return (
        <div>
            <span className='absolute left-[37px] top-12 text-2xl font-semibold mb-[52px]'>
                반가워요! <br />
                로그인해주세요.
            </span>
            <div className='absolute top-[152px] flex flex-col w-full items-center'>
                <input type='text' placeholder='   아이디' className='w-5/6 h-[47px] mb-[14px] border border-black' />
                <input type='password' placeholder='   비밀번호' className='w-5/6 h-[47px] mb-[60px] border border-black' />

                <button className="w-5/6 h-[47px] bg-my-color text-white font-semibold text-xl" onClick={() => navigate('/')}>
                    로그인
                </button>
            </div>
        </div>
    )
}

export default LogInPage