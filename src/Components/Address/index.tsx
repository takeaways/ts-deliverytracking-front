import * as React from "react";

//global
import ContentContainer from "../../Modules/Styled/ContentContainer";
//style
import * as Styles from "./styles";
import AddressCardList from "./AddressCardList";
import AddressInfo from "./AddressInfo";



const Address = () => {
    return (
        <ContentContainer>
            <Styles.ContentHeader>
                등록된 배송지
                <Styles.ContentText>+추가</Styles.ContentText>
            </Styles.ContentHeader>
            <Styles.Container>
                <Styles.LeftContentBlock>
                    <AddressCardList />
                </Styles.LeftContentBlock>
                <Styles.RightContentBlock>
                    <AddressInfo />
                </Styles.RightContentBlock>
            </Styles.Container>
        </ContentContainer>
    )
}

export default Address;