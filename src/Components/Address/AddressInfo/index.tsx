import * as React from "react";
import * as Styles from "./styles";


const info = {
    title: "배송지를 삭제하면 예약된 후원의 배송지 정보도 삭제되나요?",
    content: "현재 후원하신 프로젝트에 등록된 배송지가 삭제되거나 변경되지 않습니다. 이를 변경하시려면 후원현환에서 변경해주세요.",
    link: "https://my.geoniljang.com"
};

const AddressInfo = () => {
    return (
        <Styles.Container>
            <Styles.Title>{info.title}</Styles.Title>
            <Styles.Content>{info.content}<a href={info.link}>내 후원현황 바로가기</a>
            </Styles.Content>
        </Styles.Container>
    )
};

export default AddressInfo