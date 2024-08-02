import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import toggle from '../images/toggle.png';
import close from '../images/close.png';
import add from '../images/add.png';

const DropdownContent = styled.div`
    display: ${p => (p.show ? 'block' : 'none')};
    position: absolute;
    background-color: white;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 10;
`;

function AddBookmarkPage({ name }) {
    const location = useLocation();
    const navigate = useNavigate();
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [selectedFolder, setSelectedFolder] = useState('폴더 선택');
    const placeName = location.state?.name || '북마크';

    const handleDropdownToggle = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleMenuSelect = (name) => {
        setSelectedFolder(name);
        setDropdownVisible(false);
    };

    return (
        <div>
            {/* 헤더 */}
            <div className="flex justify-center items-center p-[15px] border-b border-gray relative">
                <img className="absolute left-[15px] w-[15px] h-[15px]" src={close} onClick={() => navigate(-1)} alt="close" />
                <span className="text-xl">북마크 추가</span>
            </div>
            {/* 정보 입력 부분 */}
            <div className="p-[15px] py-[30px]">
                {/* 북마크 이름 */}
                <div className="w-[160px] h-[42px] py-[5px] text-lg font-medium text-center border border-zinc-300">
                    <span className="text-lg text-center">{placeName}</span>
                </div>  
                <div className="flex gap-2 mt-4">
                    {/* 폴더 선택 버튼 */}
                    <button
                        className="flex items-center justify-between min-w-[160px] h-[42px] text-lg border border-zinc-300 border-solid"
                        onClick={handleDropdownToggle}
                    >
                        <span className="flex-1 text-center">{selectedFolder}</span>
                        <img className="w-6 h-6" src={toggle} alt="toggle" />
                    </button>
                    {/* 추가 버튼 */}
                    <button className='flex items-center justify-between w-[80px] h-[42px] p-2 border-2 border-blue border-solid rounded-lg'>
                        <img className="w-6 h-6" src={add} alt="add" />
                        <span>추가</span>
                    </button>
                </div>
                <DropdownContent show={dropdownVisible}>
                    {['식당', '부산 여행지'].map((menu) => (
                        <div
                            className="block px-4 py-4 hover:bg-light-blue cursor-pointer"
                            key={menu}
                            onClick={() => handleMenuSelect(menu)}
                        >
                            {menu}
                        </div>
                    ))}
                </DropdownContent>
                <div className="mt-4">메모 작성</div>
                <textarea
                    className="w-full h-[300px] p-[10px] border border-zinc-300 box-border resize-y mt-[10px]"
                    id="content"
                    placeholder="내용을 입력하세요."
                />
            </div>
            <button
                className='font-semibold text-white text-center bg-blue w-5/6 h-[30px] fixed bottom-[30px] left-1/2 transform -translate-x-1/2'
                onClick={() => navigate('/bookmark')}
            >
                완료
            </button>
        </div>
    );
}

export default AddBookmarkPage;
