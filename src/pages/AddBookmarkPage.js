import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Top = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 20px 0px;
    border-bottom: 2px solid #000;
`;

const Title = styled.div`
    font-size: 20px;
`


const Container = styled.div`
    margin: 20px;
`;

const Name = styled.div`
    border: 1px solid rgb(94, 94, 94);
    padding: 10px;
    margin-bottom: 15px;
    width: 130px;
    font-weight: 700;
    font-size: 17px;
    text-align: center;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 50px;
`;

const DropBtn = styled.button`
    background-color: white;
    color: #3b3b3b;
    padding: 10px;
    font-size: 17px;
    border: 1px solid rgb(94, 94, 94);
    width: 150px;

    &:hover {
        border-color: black;
    }
`;

const AddBtn = styled.button`
    background-color: white;
    color: #3b3b3b;
    padding: 10px;
    font-size: 17px;
    border: 1px solid rgb(94, 94, 94);
    cursor: pointer;
    width: 100px;

    &:hover {
        border-color: black;
    }
`;

const DropdownContent = styled.div`
    display: ${p => (p.show ? 'block' : 'none')};
    position: absolute;
    background-color: white;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
`;

const FastFood = styled.div`
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;

    &:hover {
        background-color: #ddd;
    }
`;

const Textarea = styled.textarea`
    width: 100%;
    height: 300px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid rgb(94, 94, 94);
    box-sizing: border-box;
    resize: vertical;
    margin-top: 10px
`;

function AddBookmarkPage() {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState('폴더 선택');

    const navigate = useNavigate()

    const handleDropdownToggle = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleMenuSelect = (menu) => {
        setSelectedMenu(menu);
        setDropdownVisible(false);
    };

    return (
        <div>
            <Top>
                <button onClick={() => navigate(-1)}>취소</button>
                <Title>북마크 추가</Title>
                <button onClick={() => navigate('/bookmark')}>완료</button>
            </Top>
            <Container>
                <Name>북마크 이름</Name>
                <ButtonContainer>
                    <DropBtn onClick={handleDropdownToggle}>
                        <span style={{color: '#666666'}}>{selectedMenu}</span>
                    </DropBtn>
                    <AddBtn>새로 추가</AddBtn>
                </ButtonContainer>
                <DropdownContent show={dropdownVisible}>
                    {['식당', '부산 여행지'].map((menu) => (
                        <FastFood key={menu} onClick={() => handleMenuSelect(menu)}>{menu}</FastFood>
                    ))}
                </DropdownContent>
                <div>메모 작성</div>
                <Textarea id="content" placeholder=""></Textarea>
            </Container>
        </div>
    );
}

export default AddBookmarkPage;