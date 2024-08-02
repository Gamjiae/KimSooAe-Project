import BottomNav from "../components/BottomNav"
import list from "../images/list.png"
import search from "../images/search.png"
import pencil from "../images/pencil.png"
import star from "../images/star.png"
import { Link } from 'react-router-dom'
import Modal from 'react-modal'
import { useState } from 'react'

function CommunityPage() {
    const boardsData = [
        { title: '게시판 1', posts: ['글 1', '글 2', '글 3', '글 4', '글 5'] },
        { title: '게시판 2', posts: ['글 1', '글 2', '글 3', '글 4', '글 5'] },
        { title: '게시판 3', posts: ['글 1', '글 2', '글 3', '글 4', '글 5'] },
        { title: '게시판 4', posts: ['글 1', '글 2', '글 3', '글 4', '글 5'] },
    ]

    const boards = [ 
    { name: '추천 게시판', route: '/recommend' }, 
    { name: '공유 게시판', route: '/share' }, 
    { name: '자유 게시판', route: '/free' }, 
    { name: 'BEST 게시판', route: '/best' }, 
]

    const [modalOpen, setModalOpen] = useState(false);
    
    return (
        <div>
            {/* 상단바 */}
            <div className="relative p-[15px] flex justify-between items-center w-full h-[50px]">
                <button className="w-[35px] h-[35px] bg-cover" style={{backgroundImage: `url(${list})`}} onClick={() => setModalOpen(!modalOpen)} />
                <button className="w-[30px] h-[30px] bg-cover" style={{backgroundImage: `url(${search})`}} />
            </div>
            {/* 중앙바 */}
            <div className="relative p-[15px] flex justify-between items-center w-full h-[70px] border-b border-gray">
                <span>다양한 이야기를 나눠보세요.</span>
                <Link to='/community/add' className="w-24 h-[33px] bg-blue rounded-md text-white flex items-center justify-center">
                    <img src={pencil} alt="pencil" className="w-[19px] h-[19px] mr-2" />
                    글 작성
                </Link>
            </div>
            {/* 게시판 */}
            <div className="grid grid-cols-2 gap-4 p-[15px]">
                {boardsData.map((board, index) => (
                <div key={index} className="p-[5px] bg-slate-100 rounded-lg">
                    <div className="w-[171px] h-8 bg-my-color2 text-center">
                        {board.title}
                    </div>
                    <ul> 
                        {board.posts.map((post, index) => (
                            <li key={index} className="text-sm border-b  border-gray last:border-b-0 py-2">{post}</li>
                        ))}
                    </ul>
                </div>
                ))}
            </div>
            { !modalOpen && <BottomNav /> }
            { modalOpen && (
                <Modal isOpen={true}
                    onRequestClose={() => setModalOpen(false)}
                    ariaHideApp={false}
                    className="bg-white shadow-lg w-4/5 h-full"
                    overlayClassName="fixed inset-0 bg-black bg-opacity-50"
                >
                    <div className="flex justify-between items-center w-full h-[50px] pl-4 pr-[11px] text-lg font-medium">
                        <span>카테고리</span>
                        <img src={list} className="w-[35px] h-[35px] bg-cover" />
                    </div>
                    <hr className="bg-slate-700"/>
                    {boards.map((board, index) => (
                        <Link key={index} className="flex justify-between items-center w-full h-[45px] px-4"
                        to={board.route}>
                            {board.name}
                            <img src={star} className="w-5 h-5 bg-cover" />
                        </Link>
                    ))}
                </Modal>
            )}
        </div>
    )
}

export default CommunityPage
