import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LogInPage() {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const loginSubmit = async () => {
        if (id === '' || pw === '') {
            setErrorMessage('아이디 또는 비밀번호를 입력해주시기 바랍니다.');
            return;
        } else {
            try {
                const res = await fetch('http://localhost:5000/api/loginCheck', {
                    method: 'POST',
                    body: JSON.stringify({ userID: id, userPW: pw }),
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
                const data = await res.json();

                if (res.status === 200) {
                    navigate('/');
                } else {
                    setErrorMessage('아이디 또는 비밀번호를 잘못 입력하였습니다. 다시 입력해주세요.');
                }
            } catch (err) {
                console.log(err);
                setErrorMessage('로그인 중 오류가 발생했습니다. 다시 시도해 주세요.');
            }
        }
    };

    return (
        <div className='p-9'>
            <span className='text-2xl font-semibold mb-[52px]'>
                반가워요! <br />
                로그인해주세요.
            </span>
            <div className='mt-[50px] flex flex-col w-full items-center'>
                <input
                    type='text'
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder='   아이디'
                    className='w-full h-[47px] mb-[14px] border border-black'
                />
                <input
                    type='password'
                    value={pw}
                    onChange={(e) => setPw(e.target.value)}
                    placeholder='   비밀번호'
                    className='w-full h-[47px] mb-[14px] border border-black'
                />
                {errorMessage && (
                    <span className='self-start text-red-500 mb-[14px]'>{errorMessage}</span>
                )}
                <button
                    type='submit'
                    className="w-full h-[47px] bg-blue text-white font-semibold text-xl"
                    onClick={loginSubmit}
                >
                    로그인
                </button>
            </div>
        </div>
    );
}

export default LogInPage;