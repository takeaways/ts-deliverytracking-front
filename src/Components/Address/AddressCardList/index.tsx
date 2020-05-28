import * as React from "react";
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


interface AddressCardListProps {

}

const AddressCardList: React.FC<AddressCardListProps> = () => {

    //Hooks
    const onSetDefault = useSetDefaultAction();
    const onDeleteAddress = useDeleteAddressAction();

    //states
    const [addressId, setAddressId] = React.useState<number>();


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
        console.log("addressId >> ", addressId)
        toggleDelete();
        // const result = await AddressService.Delete({addressId: id});
        // console.log(result);
        if (addressId) {
            onDeleteAddress({addressId});
        }
    }


    const handleItemMenu = async (type: string, id: number) => {
        switch (type) {
            case "setDefault": {
                // const result = await AddressService.Set({addressId: id});
                // console.log(result);
                console.log("------------setDefault");

                onSetDefault({addressId: id});

                break;
            }
            case "delete": {
                toggleDelete();
                setAddressId(id);

                break;
            }
        }
    };

    const addressInfo = useAddress();

    // React.useEffect(() => { }, [change]);

    return (
        <>
            <Styles.Container>
                <Styles.List>
                    {/* <Empty message={"등록된 배송지가 없습니다."} /> */}
                    {addressInfo && addressInfo.length ? (
                        (addressInfo).map((address) => (
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