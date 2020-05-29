import * as React from "react";
import * as RouterDom from "react-router-dom";

import * as Styles from "./styles";


import AddressCard from "../AddressCard";
import useAddress from "../../../Hooks/Address/useAddress";

//service
import * as AddressService from "../../../Services/Address";

//styles
import Modal from "styled-react-modal";
import useSetDefaultAction from "../../../Hooks/Address/useSetDefaultAction";
import useDeleteAddressAction from "../../../Hooks/Address/useDeleteAddressAction";
import Toast from "../../../Modules/Styled/Toast";

import DeleteConfirm from "../../../Modules/Styled/ModalDelete";
import Empty from "../../../Modules/Styled/Empty";
import ShowMore from "../../../Modules/Styled/ShowMore";
import useGetAddressAction from "../../../Hooks/Address/useGetAddressAction";
import {AddressType} from "../../../Constants/Types/address";
import useCount from "../../../Hooks/Address/useCount";
import useCountDown from "../../../Hooks/Address/useCountDown";


interface AddressCardListProps {

}

const AddressCardList: React.FC<AddressCardListProps> = () => {
    const history = RouterDom.useHistory();
    const addressInfo = useAddress();
    const count = useCount();

    //Hooks
    const onSetDefault = useSetDefaultAction();
    const onDeleteAddress = useDeleteAddressAction();
    const onGet = useGetAddressAction();
    const onCountDown = useCountDown();


    //states
    const [addressId, setAddressId] = React.useState<number>();
    const [more, setMore] = React.useState<boolean>(false);

    //ref
    const listLengthRef = React.useRef<HTMLUListElement>(null);


    //Modal Controller Detele Comfirm
    const [isDelete, setIsDelete] = React.useState<boolean>(false);
    const toggleDelete = () => {
        setIsDelete(!isDelete)
    };

    const [change, setChange] = React.useState<boolean>(false);
    const onToast = () => {
        setChange(true);
    };
    const onClose = () => {
        setChange(false);
    };

    //event handler
    const onConfirm = async () => {
        try {
            toggleDelete();
            const result = await AddressService.Delete({addressId: addressId!});
            if (addressId) {
                onDeleteAddress({addressId});
            }
        } catch (e) {
            history.push("/address");
        }

    };
    const onShowMore = async () => {
        const listLength = (listLengthRef.current as HTMLUListElement).childElementCount;
        const result = await AddressService.Get({offset:listLength});
        onGet(result);

    };
    const handleItemMenu = async (type: string, id: number) => {
        switch (type) {
            case "setDefault": {
                const result = await AddressService.Set({addressId: id});
                if (result) {
                    onSetDefault({addressId: result});
                }
                break;
            }
            case "delete": {
                toggleDelete();
                setAddressId(id);
                onCountDown();
                break;
            }
        }
    };


    React.useEffect(() => {
        console.log(",----------", count)
        if (addressInfo.length < count) {
            setMore(true);
        } else {
            setMore(false)
        }

    }, [addressInfo && addressInfo.length, count]);

    return (
        <>
            <Styles.Container>
                <Styles.List ref={listLengthRef}>
                    {addressInfo && (addressInfo as AddressType[]).length ? (
                        (addressInfo as AddressType[]).map((address) => (
                            <Styles.Item>
                                <AddressCard
                                    addressInfo={address}
                                    onClickMenu={handleItemMenu}
                                    onToast={onToast}
                                    onClose={onClose}
                                />
                            </Styles.Item>
                        ))
                    ) : (<Empty message={"등록된 배송지가 없습니다."}/>)
                    }
                    {more && <ShowMore onShowMore={onShowMore}/>}
                </Styles.List>
            </Styles.Container>
            <Modal
                isOpen={isDelete}
                onBackgroundClick={toggleDelete}
                onEscapeKeydown={toggleDelete}
            >
                <DeleteConfirm message={"정말 삭제하시겠니까?"} onCancel={toggleDelete} onConfirm={onConfirm}/>
            </Modal>
            {change && <Toast message={"기본 배송지가 변경되었습니다."} onClose={onClose}/>}
        </>
    )
};

export default AddressCardList;