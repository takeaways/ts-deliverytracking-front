import * as React from "react";
import PageContainer from "../../Modules/Styled/PageCotainer";
import HomeNavbar from "../../Components/Common/HomeNavbar";
import PageTitle from "../../Modules/Styled/PageTitle";

import AddressComponent from "../../Components/Address";




const Address = () => {


    return (
        <>
            <PageContainer>
                <PageTitle>설정</PageTitle>
                <HomeNavbar />
                <AddressComponent />
            </PageContainer>
        </>
    )
}

export default Address;