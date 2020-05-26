import * as React from "react";
import * as Styles from "./styles";


import AddressCard from "../AddressCard";
import useAddress from "../../../Hooks/Address/useAddress";


import * as AddressService from "../../../Services/Address";
import useSetDefaultAction from "../../../Hooks/Address/useSetDefaultAction";
import useDeleteAddressAction from "../../../Hooks/Address/useDeleteAddressAction";
import Toast from "../../../Modules/Styled/Toast";


const AddressCardList: React.FC = () => {

    const onSetDefault = useSetDefaultAction();
    const onDeleteAddress = useDeleteAddressAction();

    const [change, setChange] = React.useState<boolean>(false);
    const onToast = () =>{
        setChange(true);
    };
    const onClose = () => {
        setChange(false);
    };


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
                // const result = await AddressService.Delete({addressId: id});
                // console.log(result);
                onDeleteAddress({addressId: id});
                break;
            }
        }
    };

    const addressInfo = useAddress();

    React.useEffect(()=>{},[change]);

    return (
        <>
            <Styles.Container>
                <Styles.List>
                    {addressInfo && addressInfo.length ? (
                        (addressInfo).map((address) => (
                            <Styles.Item>
                                <AddressCard addressInfo={address} onClickMenu={handleItemMenu} onToast={onToast} onClose={onClose}/>
                            </Styles.Item>
                        ))
                    ) : (<h1>데이터가 없습니다....</h1>)
                    }
                </Styles.List>
            </Styles.Container>
            {change && <Toast message={"기본 배송지가 변경되었습니다."} onClose={onClose}/>}
        </>
    )
};

export default AddressCardList;