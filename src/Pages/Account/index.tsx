import * as React from "react";
import Modal from 'styled-react-modal'


//Global Style
import PageContainer from "../../Modules/Styled/PageCotainer";
import PageTitle from "../../Modules/Styled/PageTitle";
import HomeNavbar from "../../Components/Common/HomeNavbar";
import Toast from "../../Modules/Styled/Toast";

const Account = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleModal = (e: any) => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <PageContainer>
                <PageTitle>설정</PageTitle>
                <HomeNavbar/>
                {/*<Toast message={"Hello world"} point={80} />*/}
                <div>
                    <button onClick={toggleModal}>Click me</button>
                    <Modal
                        isOpen={isOpen}
                        onBackgroundClick={toggleModal}
                        onEscapeKeydown={toggleModal}>

                        <span>I am a modal!</span>
                        <button onClick={toggleModal}>Close me</button>
                    </Modal>
                </div>

            </PageContainer>
        </>
    )
}

export default Account;