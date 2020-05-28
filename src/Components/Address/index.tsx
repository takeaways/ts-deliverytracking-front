import * as React from "react";

//global
import ContentContainer from "../../Modules/Styled/ContentContainer";
//style
import Modal from "styled-react-modal";
import * as Styles from "./styles";
import AddressCardList from "./AddressCardList";
import AddressInfo from "./AddressInfo";
import AddressCreate from "./AddressCreate";
import PageContainer from "../../Modules/Styled/PageCotainer";
import PageTitle from "../../Modules/Styled/PageTitle";
import HomeNavbar from "../Common/HomeNavbar";


const Address = () => {

    //Modal Controller Create Form
    const [isOpen, setIsOpen] = React.useState(false);
    const toggleCreate = () => {
        setIsOpen(!isOpen)
    };


    return (
        <ContentContainer>
            <Styles.ContentHeader>
                등록된 배송지
                <Styles.ContentText onClick={toggleCreate}>+추가</Styles.ContentText>
            </Styles.ContentHeader>
            <Styles.Container>
                <Styles.LeftContentBlock>
                    <AddressCardList/>
                </Styles.LeftContentBlock>
                <Styles.RightContentBlock>
                    <AddressInfo/>
                </Styles.RightContentBlock>
            </Styles.Container>
            {/*    add form */}
            <Modal
                isOpen={isOpen}
                onBackgroundClick={toggleCreate}
                onEscapeKeydown={toggleCreate}
            >
                <AddressCreate onToggle={toggleCreate}/>
            </Modal>

        </ContentContainer>
    )
};

export default Address;