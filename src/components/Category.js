import { Link } from 'react-router-dom'
import Modal from 'react-modal'
import star from '../images/star.png'
import list from '../images/list.png'

function Category({ modalOpen, setModalOpen }) {

    const boards = [
        { name: '추천 게시판', route: '/community/recommend' },
        { name: '공유 게시판', route: '/community/share' },
        { name: '자유 게시판', route: '/community/free' },
        { name: 'BEST 게시판', route: '/community/best' },
    ]

    return (
        <div>
            <button className="w-[35px] h-[35px] bg-cover" style={{ backgroundImage: `url(${list})` }} onClick={() => setModalOpen(!modalOpen)} />

            {modalOpen && (
                <Modal isOpen={true}
                    onRequestClose={() => setModalOpen(false)}
                    ariaHideApp={false}
                    className="bg-white shadow-lg w-4/5 h-full"
                    overlayClassName="fixed inset-0 bg-black bg-opacity-50"
                >
                    <div className="flex justify-between items-center w-full h-[50px] pl-4 pr-[11px] text-lg font-medium border-b border-gray">
                        <span>카테고리</span>
                        <button className="w-[35px] h-[35px] bg-cover" style={{ backgroundImage: `url(${list})` }} onClick={() => setModalOpen(false)} />
                    </div>
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

export default Category
