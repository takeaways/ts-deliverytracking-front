import * as React from "react";
import { MdMoreHoriz } from "react-icons/md";

import { AddressType } from "../../../Constants/Types/address";

//styled
import * as Styles from "./styles";
import Dropdown from "../../../Modules/Styled/Dropdown";


const AddressCard: React.FC<{ addressInfo: AddressType, onShow: (id: number) => void }> = ({ addressInfo, onShow }) => {

    const menus: any = [
        {
            name: "삭제하기",
            onClick: (props: any, name: string, index: number) => {
                console.log([props, name, index]);
            }
        },
        {
            name: "편집하기",
            onClick: (props: any, name: string, index: number) => {
                console.log([props, name, index]);
            }
        }
    ]



    return (
        <Styles.Container>
            <Styles.Card className="card">
                <Styles.CardLeft>
                    <Styles.CardZip>[ {addressInfo.postnumber} ] {addressInfo.default && <Styles.Default>기본</Styles.Default>}</Styles.CardZip>
                    <Styles.CardAddress>{addressInfo.address}</Styles.CardAddress>
                </Styles.CardLeft>
                <Styles.CardRight>
                    <Styles.CardSetBtn>
                        <Dropdown items={menus} width={168}>
                            <MdMoreHoriz />
                        </Dropdown>
                    </Styles.CardSetBtn>
                </Styles.CardRight>
            </Styles.Card>
        </Styles.Container >
    )
}

export default AddressCard;