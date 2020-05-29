import * as React from "react";
import {MdMoreHoriz} from "react-icons/md";

import {AddressType} from "../../../Constants/Types/address";

//styled
import * as Styles from "./styles";
import Dropdown from "../../../Modules/Styled/Dropdown";


interface AddressCardProps {
    addressInfo: AddressType,
    onClickMenu: (type: string, id: number) => void;
    onToast: () => void;
    onClose: () => void;

    more:boolean;

}

const AddressCard: React.FC<AddressCardProps> = ({addressInfo, onClickMenu, onToast, onClose, more}) => {

    const card = React.useRef<HTMLDivElement>(null);

    const menus: any = [
        {
            name: "기본 배송지 설정",
            onClick: (props: any, name: string, index: number) => {
                console.log([props, name, index]);
                onToast();
                onClickMenu("setDefault", addressInfo.id!);
            }
        },
        {
            name: "삭제",
            onClick: (props: any, name: string, index: number) => {
                console.log([props, name, index]);
                onClickMenu("delete", addressInfo.id!);
            }
        }
    ];


    React.useEffect(()=>{
        if(card.current){
            if(more){
                card.current!.classList.add("remove")
            }else{
                card.current!.classList.remove("remove")
            }
        }
    },[more]);


    return (
        <Styles.Container>
            <Styles.Card ref={card} className="card">
                <Styles.CardLeft>
                    <Styles.CardZip>[ {addressInfo.postnumber} ] {addressInfo.default && <Styles.Default>기본</Styles.Default>}</Styles.CardZip>
                    <Styles.CardAddress>{addressInfo.address}</Styles.CardAddress>
                </Styles.CardLeft>
                <Styles.CardRight>
                    <Styles.CardSetBtn>
                        <Dropdown items={menus} width={168}>
                            <MdMoreHoriz onClick={onClose}/>
                        </Dropdown>
                    </Styles.CardSetBtn>
                </Styles.CardRight>
            </Styles.Card>
        </Styles.Container>
    )
}

export default AddressCard;