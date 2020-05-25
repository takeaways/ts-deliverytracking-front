import * as React from "react";
import { MdMoreHoriz } from "react-icons/md";

import { AddressType } from "../../../Constants/Types/address";

//styled
import * as Styles from "./styles";


const AddressCard: React.FC<{ addressInfo: AddressType }> = ({ addressInfo }) => {


    return (
        <Styles.Container>
            <Styles.Card className="card">
                <Styles.CardRight>
                    <Styles.CardZip>[ {addressInfo.postnumber} ] {addressInfo.default && <Styles.Default>기본</Styles.Default>}</Styles.CardZip>
                    <Styles.CardAddress>{addressInfo.address}</Styles.CardAddress>
                </Styles.CardRight>
                <Styles.CardLeft>
                    <Styles.CardSetBtn>
                        <MdMoreHoriz />
                    </Styles.CardSetBtn>
                </Styles.CardLeft>
            </Styles.Card>
        </Styles.Container>
    )
}

export default AddressCard;