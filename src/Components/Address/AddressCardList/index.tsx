import * as React from "react";
import * as Styles from "./styles";

import data from "../../../db";
import AddressCard from "../AddressCard";
import { AddressType } from "../../../Constants/Types/address";



const AddressCardList = () => {
    const addressData: AddressType[] = ((data as any).addresses as AddressType[]).map((d) => {
        d.default = true;
        d.show = false;
        return d
    })

    const [addressInfo, setAddressInfo] = React.useState<AddressType[]>(addressData);

    const onShow = (id: number) => {
        addressInfo.forEach(add => {

        })
    }



    return (
        <Styles.Container>
            <Styles.List>
                {addressInfo && addressInfo.length ? (
                    (addressInfo as AddressType[]).map((address) => (
                        <Styles.Item>
                            <AddressCard addressInfo={address} onShow={onShow} />
                        </Styles.Item>
                    ))
                ) : (
                        <h1>데이터가 없습니다....</h1>
                    )
                }
            </Styles.List>
        </Styles.Container>
    )
}

export default AddressCardList;