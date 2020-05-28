import * as React from "react";
import * as RouterDom from "react-router-dom";

import HomeNavbar from "../../Components/Common/HomeNavbar";

import PageContainer from "../../Modules/Styled/PageCotainer";
import PageTitle from "../../Modules/Styled/PageTitle";

import * as AddressService from "../../Services/Address";
import AddressComponent from "../../Components/Address";
import useGetAddressAction from "../../Hooks/Address/useGetAddressAction";

import { AddressType } from "../../Constants/Types/address";
import useCountAction from "../../Hooks/Address/useCountAction";

const Address: React.FC<RouterDom.RouteComponentProps> = ({ match }) => {

    const onGetAddress = useGetAddressAction();
    const onCount = useCountAction();
    const history = RouterDom.useHistory();


    const loadAddress = async () => {
        try {
            const result:AddressType[] = await AddressService.Get({ offset: 0 });
            onGetAddress(result)
        } catch (e) {
            history.push('/address')
        }
    };

    const loadCount = async () =>{
        try {
            const result = await AddressService.Count();
            onCount(result)
        } catch (e) {
            history.push('/address')
        }
    };

    React.useEffect(() => {
        (async () => {
            await loadAddress();
            await loadCount();
        })();
    }, []);
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

export default RouterDom.withRouter(Address);