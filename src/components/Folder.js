import { useState } from 'react';
import '../a.css';
import EmojiBox from './EmojiBox';
import ColorBox from './ColorBox';
import line from '../images/line.png';
import close from '../images/close.png';
import add from '../images/add.png';
import menu from '../images/menu.png';
import styled from 'styled-components';

const Menu = styled.div`
    padding: 10px;
    font-size: 14px;
    color: #333;
    cursor: pointer;
`;

const Option = styled.div`
    margin-bottom: 30px;
    font-size: 18px;
    color: gray;
    text-align: left;
`;

function Folder() {
    const [isDragging, setIsDragging] = useState(false);
    const [startY, setStartY] = useState(0);
    const [currentHeight, setCurrentHeight] = useState('66.67%');
    const [isCreatingFolder, setIsCreatingFolder] = useState(false);
    const [folderName, setFolderName] = useState('');
    const [folders, setFolders] = useState([]);
    const [isPrivate, setIsPrivate] = useState(false);
    const [activeFolderIndex, setActiveFolderIndex] = useState(null);
    const [isColorBoxVisible, setIsColorBoxVisible] = useState(false);
    const [selectedFolderIndex, setSelectedFolderIndex] = useState(null);
    const [newFolderColor, setNewFolderColor] = useState('#d4d4d4');
    const [newFolderEmoji, setNewFolderEmoji] = useState('');

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartY(e.clientY);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const deltaY = startY - e.clientY;
        const newHeight = Math.min(Math.max(66.67 + (deltaY / window.innerHeight) * 100, 0), 100);
        setCurrentHeight(`${newHeight}%`);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        if (parseFloat(currentHeight) > 50) {
            setCurrentHeight('100%');
        } else {
            setCurrentHeight('66.67%');
        }
    };

    const handleCreateFolder = () => {
        setIsCreatingFolder(true);
    };

    const handleFolderNameChange = (e) => {
        setFolderName(e.target.value);
    };

    const handleAddFolder = () => {
        if (folderName.trim() === '') return;

        setFolders([...folders, { name: folderName, color: newFolderColor, emoji: newFolderEmoji }]);
        setIsCreatingFolder(false);
        setFolderName('');
        setNewFolderColor('#d4d4d4');
        setNewFolderEmoji('');
    };

    const handleCancel = () => {
        setIsCreatingFolder(false);
        setNewFolderColor('#d4d4d4');
        setNewFolderEmoji('');
    };

    const togglePrivate = () => {
        setIsPrivate(!isPrivate);
    };

    const handleMoreOptionsClick = (index) => {
        setActiveFolderIndex(activeFolderIndex === index ? null : index);
    };

    const handleDeleteFolder = (index) => {
        const updatedFolders = folders.filter((_, i) => i !== index);
        setFolders(updatedFolders);
        setActiveFolderIndex(null);
    };

    const handleDropdownButtonClick = (index) => {
        setSelectedFolderIndex(index);
        setIsColorBoxVisible(true);
    };

    const handleCloseColorBox = () => {
        setIsColorBoxVisible(false);
    };

    const handleSelectColor = (color) => {
        if (selectedFolderIndex === null) {
            setNewFolderColor(color);
        } else {
            const updatedFolders = folders.map((folder, index) =>
                index === selectedFolderIndex ? { ...folder, color } : folder
            );
            setFolders(updatedFolders);
            setSelectedFolderIndex(null);
        }
        setIsColorBoxVisible(false);
    };

    const handleSelectEmoji = (emoji) => {
        setNewFolderEmoji(emoji);
    };

    return (
        <div
            className="bg-white w-full h-2/3 rounded-t-lg absolute z-20 bottom-[55px]"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            
            {isColorBoxVisible && <ColorBox onClose={handleCloseColorBox} onSelectColor={handleSelectColor} />}
            
            {!isColorBoxVisible && (
                <>
                    {/* 상단바 영역 */}
                    <div
                        className="w-full h-10 flex justify-center items-center relative cursor-pointer select-none"
                        onMouseDown={handleMouseDown}
                    >
                        <img className="w-[60px]" src={line} />
                    </div>

                    {/* 본문 영역 */}
                    <div className="w-full h-[calc(100%-40px)] flex flex-col items-start p-5 overflow-y-auto">
                        {!isCreatingFolder && (
                            <>
                                <span className="mb-[30px] text-80">
                                    전체 폴더 {folders.length}개
                                </span>

                                {/* 새 폴더 생성 버튼 */}
                                <button className="flex items-center text-lg cursor-pointer text-80 mb-5" onClick={handleCreateFolder}>
                                    <img className="w-[35px] h-[35px] mr-4 ml-[-2px]" src={add} />
                                    새 폴더 생성
                                </button>

                                {/* 폴더 목록 */}
                                <div className="w-full flex flex-col">
                                    {folders.map((folder, index) => (
                                        <div className="flex items-center relative mb-5" key={index}>
                                            <div className="w-[30px] h-[30px] bg-[#d0d0d0] rounded-full mr-4" style={{ backgroundColor: folder.color }}>
                                                {/* 이모지 */}
                                                {folder.emoji && <img src={folder.emoji} alt="emoji" className="z-[1] w-[22px] h-[22px] relative mt-[3px] ml-1" />}
                                            </div>
                                            <span className="text-lg text-80">{folder.name}</span>

                                            {/* ... 버튼 */}
                                            <img className="cursor-pointer ml-auto" src={menu} onClick={() => handleMoreOptionsClick(index)} />

                                            {/* ... 버튼 클릭시 열리는 메뉴 */}
                                            {activeFolderIndex === index && (
                                                <div className="absolute top-7.5 right-2.5 bg-white border border-gray rounded-lg shadow-md z-10">
                                                    <Menu>수정하기</Menu>
                                                    <Menu onClick={() => handleDeleteFolder(index)}>삭제하기</Menu>
                                                    <Menu className="more-options-item">공유하기</Menu>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}

                        {isCreatingFolder && (
                            <div className="flex flex-col w-full">
                                {/* 폴더 이름 작성란 */}
                                <div className="flex items-center text-80 mb-4">
                                    <img className="w-[33px] h-[33px] mr-4" src={add} />
                                    <input
                                        type="text"
                                        className="w-[calc(120%+50px)] h-9 p-1.5 text-lg box-border border-b-[1.3px] border-80"
                                        placeholder="새 폴더 이름"
                                        value={folderName}
                                        onChange={handleFolderNameChange}
                                    />
                                </div>

                                <div className="my-5 ml-[15px]">
                                    <div className="flex justify-between items-center w-full">
                                        <Option>색상 선택</Option>
                                        <div
                                            className="relative w-[50px] h-[23px] bg-[#a3a3a3] rounded-full mt-[-30px] cursor-pointer"
                                            onClick={() => handleDropdownButtonClick(null)}
                                            style={{ backgroundColor: newFolderColor }}
                                        >
                                            <span className="absolute right-[7px] top-1/2 transform -translate-y-1/2 text-white text-[12px]">
                                                ▼
                                            </span>
                                        </div>
                                    </div>

                                    <Option>이모티콘 선택</Option>
                                    <EmojiBox onSelectEmoji={handleSelectEmoji} />
                                    <div className="flex justify-between items-center w-full ">
                                        <Option>폴더 비공개</Option>
                                        <div className={`toggle-switch ${isPrivate ? 'active' : ''}`} onClick={togglePrivate}>
                                            <div className="toggle-thumb" />
                                        </div>
                                    </div>
                                    <Option>메모</Option>
                                    <textarea className="w-full h-[50px] border border-80 rounded-md mb-4" placeholder="메모를 입력하세요" />
                                    <button className="font-semibold text-white bg-blue w-full h-[38px] rounded-md" onClick={handleAddFolder}>
                                        완료
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </>
            )}
            
        </div>
    );
}

export default Folder;
