import * as React from "react";
import * as Styles from "./styles";
import {MdClear} from "react-icons/md";

import * as AddressService from "../../../Services/Address";
import {AddressType} from "../../../Constants/Types/address";
import useCreateAddressAction from "../../../Hooks/Address/useCreateAddressAction";


interface AddressCreateProps {
    onToggle: () => void
}

const AddressCreate: React.FC<AddressCreateProps> = ({onToggle}) => {

    //reducer 
    const useCreate = useCreateAddressAction();


    const [receiver, setReceiver] = React.useState("");
    const [zipCode, setZipCode] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [checkDefault, setCheckDefault] = React.useState(false);
    const [receiverError, setReceiverError] = React.useState(false);
    const [zipCodeError, setZipCodeError] = React.useState(false);
    const [addressError, setAddressError] = React.useState(false);
    const [lengthError, setLengthError] = React.useState(false);

    //custom
    const _setReset = () => {
        setReceiverError(false);
        setZipCodeError(false);
        setAddressError(false);
        setLengthError(false);
    };

    //event handlers
    const onSetReceiver = (e: React.ChangeEvent<HTMLInputElement>) => {
        _setReset();
        setReceiver(e.target.value)
    };
    const onSetZipCode = (e: React.ChangeEvent<HTMLInputElement>) => {
        _setReset();
        setZipCode(e.target.value)
    };
    const onSetAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
        _setReset();
        setAddress(e.target.value)
    };
    const onSetDefault = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckDefault(e.target.checked)
    };
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let check = true;
        if (!receiver.trim()) {
            setReceiverError(true);
            check = false;
        }
        if (!zipCode.trim()) {
            setZipCodeError(true);
            check = false;
        }
        if (!address.trim()) {
            setAddressError(true);
            check = false;
        }
        if (address.trim().length > 25) {
            setLengthError(true);
            check = false;
        }
        if (check) {
            (async () => {
                const addressInfo: {
                    name: string,
                    postnumber: number,
                    address: string,
                    default: boolean
                } = {
                    name: receiver,
                    postnumber: parseInt(zipCode, 10),
                    address: address,
                    default: checkDefault
                };
                const result = await AddressService.Create(addressInfo);
                useCreate(result);
                onToggle();
            })();
        }
    };


    return (
        <Styles.Container onSubmit={onSubmit}>
            <Styles.Header>
                <Styles.HeaderLeft>배송지 추가</Styles.HeaderLeft>
                <Styles.HeaderRight onClick={onToggle}><MdClear/></Styles.HeaderRight>
            </Styles.Header>
            <Styles.Body>
                <Styles.FormDivider>
                    <Styles.FormGroup>
                        <Styles.Input placeholder={"받는 사람"} value={receiver} onChange={onSetReceiver}/>
                        {receiverError && <Styles.Error>받는 분 이름을 입력해주세요.</Styles.Error>}
                    </Styles.FormGroup>
                    <Styles.FormGroup>
                        <Styles.Input pattern="[0-9]*" placeholder={"우편번호 : 123456"} width={228} value={zipCode} onChange={onSetZipCode}/>
                        {zipCodeError && <Styles.Error>우편번호를 입력해주세요.</Styles.Error>}
                    </Styles.FormGroup>
                </Styles.FormDivider>
                <Styles.FormDivider>
                    <Styles.FormGroup>
                        <Styles.Input style={{width: "100%"}} placeholder={"주소"} value={address} onChange={onSetAddress} maxLength={25}/>
                        {addressError && <Styles.Error>주소를 입력해 주세요.</Styles.Error>}
                        {lengthError && <Styles.Error>주소는 25자를 넘을 수 없습니다.</Styles.Error>}
                    </Styles.FormGroup>
                </Styles.FormDivider>
                <Styles.FormDivider>
                    <Styles.FormGroup>
                        <Styles.Check checked={checkDefault} onChange={onSetDefault}/>
                    </Styles.FormGroup>
                </Styles.FormDivider>
            </Styles.Body>
            <Styles.Footer>
                <Styles.FormDivider style={{height: "82px;"}}>
                    <Styles.FormGroup>
                        <Styles.Button>등록 완료</Styles.Button>
                    </Styles.FormGroup>
                </Styles.FormDivider>
            </Styles.Footer>
        </Styles.Container>
    )
};

export default AddressCreate



