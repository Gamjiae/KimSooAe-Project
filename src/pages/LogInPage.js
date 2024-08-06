import { useState } from 'react'
import { useNavigate } from "react-router-dom"

function LogInPage() {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const navigate = useNavigate()

    const loginSubmit = async () => {
        if (id === '' || pw === '') {
            alert('아이디 또는 비밀번호를 입력해주시기 바랍니다');
            return
        } else {
            try {
                const res = await fetch('/api/loginCheck', {
                    method: 'POST',
                    body: JSON.stringify({userID: id, userPW: pw}),
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
                const data = await res.json();
                
                alert(data);
                if (res.status === 200) {
                    navigate('/main');
                } else {
                    setId('');
                    setPw('');
                    return;
                }
            } catch(err) {
                console.log(err);
            }
        }
    }

    return (
        <div>
            <span className='absolute left-[37px] top-12 text-2xl font-semibold mb-[52px]'>
                반가워요! <br />
                로그인해주세요.
            </span>
            <div className='absolute top-[152px] flex flex-col w-full items-center'>
                <input type='text' value={id} onChange={(e) => setId(e.target.value)} placeholder='   아이디' className='w-5/6 h-[47px] mb-[14px] border border-black' />
                <input type='password' value={pw} onChange={(e) => setPw(e.target.value)} placeholder='   비밀번호' className='w-5/6 h-[47px] mb-[60px] border border-black' />

                <button type='submit' className="w-5/6 h-[47px] bg-blue text-white font-semibold text-xl" onClick={loginSubmit}>
                    로그인
                </button>
            </div>
        </div>
    )
}

export default LogInPage