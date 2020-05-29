import * as React from "react";

//Global Style
import PageContainer from "../../Modules/Styled/PageCotainer";
import PageTitle from "../../Modules/Styled/PageTitle";
import HomeNavbar from "../../Components/Common/HomeNavbar";


const Account = () => {
    return (
        <>
            <PageContainer>
                <PageTitle>설정</PageTitle>
                <HomeNavbar/>
            </PageContainer>
        </>
    )
};

export default Account;