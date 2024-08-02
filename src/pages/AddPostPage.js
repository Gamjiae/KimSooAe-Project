import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from 'react-modal'
import close from '../images/close.png'
import add from '../images/add.png'
import CategoryDropdown from '../components/CategoryDropdown'

function AddPostPage() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('카테고리 선택');
  const options = ['apple', 'orange', 'grape', 'melon']; 

  const handleSelect = (itemText) => {
    setSelectedOption(itemText);
  };

  return (
    <div>
      {/* 헤더 */}
      <div className="flex justify-center items-center p-[15px] border-b border-gray relative">
        <img className="absolute left-[15px] w-[15px] h-[15px]" src={close} onClick={() => navigate(-1)} alt="close" />
        <span className="text-xl">글 작성</span>
      </div>

      {/* 입력란 */}
      <div className="flex flex-col w-full p-[15px]">
        <input className="h-[50px] border-b border-gray" placeholder="제목" />
        
        {/* 카테고리 드롭다운 */}
        <CategoryDropdown
          options={options}
          selectedOption={selectedOption}
          onSelect={handleSelect}
        />

        <div className="flex justify-between items-center border-b border-gray">
            <input 
                className="h-[50px]" 
                placeholder="북마크를 첨부해보세요!" 
            />
            <button className="flex items-center  w-[85px] h-[31px] p-[2px] rounded-md border-2 border-solid border-blue" onClick={() => setModalOpen(!modalOpen)}>
                <img src={add} className="w-6 h-6" />
                <span className="text-xs text-zinc-800">폴더 선택</span>
            </button>
        </div>

        <textarea
          className="w-full h-[300px] p-[10px] border border-zinc-300 box-border resize-y mt-[10px]"
          id="content"
          placeholder="내용을 입력하세요."
        />
      </div>

      <button
        className='font-semibold text-white text-lg bg-blue w-[calc(100%-40px)] h-[38px] fixed bottom-[30px] left-1/2 transform -translate-x-1/2 rounded-md'
        onClick={() => navigate('/community')}
      >
        완료
      </button>

      { modalOpen && (
        <Modal isOpen={true}
          onRequestClose={() => setModalOpen(false)}
          ariaHideApp={false}
          className="fixed bottom-0 p-[15px] bg-zinc-100 w-full h-3/6 rounded-xl"
          overlayClassName="fixed inset-0"
        >
          폴더 선택
          <div className="flex flex-col">
            리스트 여러개 나열
          </div>
          <button
            className='font-semibold text-white text-lg bg-blue w-[calc(100%-40px)] h-[38px] fixed bottom-[30px] left-1/2 transform -translate-x-1/2 rounded-md'
            onClick={() => setModalOpen(!modalOpen)}
          >
            등록
          </button>
        </Modal>
      )}
    </div>
  );
}

export default AddPostPage;
