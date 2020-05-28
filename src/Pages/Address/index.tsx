import * as React from "react";
import * as RouterDom from "react-router-dom";


import HomeNavbar from "../../Components/Common/HomeNavbar";

import PageContainer from "../../Modules/Styled/PageCotainer";
import PageTitle from "../../Modules/Styled/PageTitle";


import * as AddressService from "../../Services/Address";
import AddressComponent from "../../Components/Address";
import useGetAddressAction from "../../Hooks/Address/useGetAddressAction";

import {AddressType} from "../../Constants/Types/address";

const addresses: AddressType[] = [
    {
        "id": 12382726352,
        "postnumber": 203928,
        "name": "홍길동",
        "address": "서울시 강남구 강남대로 364, 11층"
    },
    {
        "id": 12382726390,
        "postnumber": 233958,
        "name": "고길동",
        "address": "서울시 강남구 가양대로 32, 가양아파트 21동 201호",
        "default": true
    },
    {
        "id": 12382726393,
        "postnumber": 243929,
        "name": "이영신",
        "address": "서울시 서초구 서초대로 311, 20층"
    },
    {
        "id": 12382726493,
        "postnumber": 303297,
        "name": "이신영",
        "address": "충청북도 강화군 양수리 223, 양수빌딩 9층"
    },
    {
        "id": 12382726423,
        "postnumber": 309126,
        "name": "고신영",
        "address": "인천시 강화군 양수리 213, 가양아파트 21동 201호"
    }];


const Address: React.FC<RouterDom.RouteComponentProps> = ({match}) => {

    const onGetAddress = useGetAddressAction();
    const history = RouterDom.useHistory();


    const loadAddress = async () => {
        try {
            // const result = await AddressService.Get();
            onGetAddress(addresses)
        } catch (e) {
            // history.push('/')
        }
    };

    React.useEffect(() => {
        (async () => {
            await loadAddress();
        })();
    }, []);
    return (
        <>
            <PageContainer>
                <PageTitle>설정</PageTitle>
                <HomeNavbar/>
                <AddressComponent/>
            </PageContainer>
        </>
    )
}

export default RouterDom.withRouter(Address);