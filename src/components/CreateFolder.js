import React, { useState } from 'react';
import EmojiBox from './EmojiBox';
import ColorBox from './ColorBox';
import add from '../images/add.png';
import styled from 'styled-components';

const Option = styled.div`
    margin-bottom: 30px;
    font-size: 18px;
    color: gray;
    text-align: left;
`;

function CreateFolder({
  onAddFolder,
  onCancel,
  newFolderColor,
  newFolderEmoji,
  setNewFolderColor,
  setNewFolderEmoji,
  setIsColorBoxVisible,
  setSelectedFolderIndex,
  isColorBoxVisible,
  handleCloseColorBox,
  handleSelectColor,
  handleSelectEmoji}) 
  {
  const [folderName, setFolderName] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);

  const handleFolderNameChange = (e) => {
      setFolderName(e.target.value);
  };

  const handleAddFolder = () => {
      if (folderName.trim() === '') return;
      onAddFolder({ name: folderName, color: newFolderColor, emoji: newFolderEmoji, isPrivate });
      setFolderName('');
      setNewFolderColor('#d4d4d4');
      setNewFolderEmoji('');
  };

  const togglePrivate = () => {
      setIsPrivate(!isPrivate);
  };

  const handleDropdownButtonClick = () => {
      setSelectedFolderIndex(null);
      setIsColorBoxVisible(true);
  };

  return (
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

      <div className="w-full bg-white my-5 ml-[15px]">
        <div className="flex justify-between items-center w-full mb-4">
          <Option>색상 선택</Option>
          <div
              className="dropdown-button"
              onClick={() => handleDropdownButtonClick(null)}
              style={{ backgroundColor: newFolderColor }}
          />
        </div>
        <Option>이모티콘 선택</Option>
        <EmojiBox onSelectEmoji={handleSelectEmoji} />
        <div className="option-container mb-4">
          <Option>폴더 비공개</Option>
          <div className={`toggle-switch ${isPrivate ? 'active' : ''}`} onClick={togglePrivate}>
              <div className="toggle-thumb" />
          </div>
        </div>
        <Option>메모</Option>
        <textarea className="h-[50px] border border-80 rounded-md mb-4" placeholder="메모를 입력하세요" />
        <button className="font-semibold text-white bg-blue w-full h-[38px] rounded-md" onClick={handleAddFolder}>
          완료
        </button>
      </div>
    </div>
  );
}

export default CreateFolder;