import * as React from "react";
import * as Styles from "./styles";

import data from "../../../db";
import AddressCard from "../AddressCard";
import { AddressType } from "../../../Constants/Types/address";



const AddressCardList = () => {
    const addressData: AddressType[] = ((data as any).addresses as AddressType[]).map((d) => {
        d.default = true
        return d
    })

    console.log("----> ", addressData)

    return (
        <Styles.Container>
            <Styles.List>
                {addressData && addressData.length ? (
                    addressData.map((address: any) => (
                        <Styles.Item>
                            <AddressCard addressInfo={address} />
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