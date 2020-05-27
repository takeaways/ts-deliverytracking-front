import * as React from "react";
import * as Styles from "./styles";
import { MdClear } from "react-icons/md";


interface AddressCreateProps {
    onToggle: () => void
}

const AddressCreate: React.FC<AddressCreateProps> = ({ onToggle }) => {
    return (
        <Styles.Container>
            <Styles.Header>
                <Styles.HeaderLeft>배송지 추가</Styles.HeaderLeft>
                <Styles.HeaderRight onClick={onToggle}><MdClear /></Styles.HeaderRight>
            </Styles.Header>

            <Styles.Body>
                <Styles.FormDivider>
                    <Styles.FormGroup>
                        <Styles.Input placeholder={"받는 사람"} />
                        <Styles.Error>받는 분 이름을 입력해주세요.</Styles.Error>
                    </Styles.FormGroup>
                    <Styles.FormGroup>
                        <Styles.Input placeholder={"우편번호"} width={228} />
                        <Styles.Error>우편번호를 입력해주세요.</Styles.Error>
                    </Styles.FormGroup>
                </Styles.FormDivider>
                <Styles.FormDivider>
                    <Styles.FormGroup>
                        <Styles.Input style={{ width: "100%" }} placeholder={"주소"} />
                        <Styles.Error>주소를 입력해 주세요.</Styles.Error>
                    </Styles.FormGroup>
                </Styles.FormDivider>
                <Styles.FormDivider>
                    <Styles.FormGroup>
                        <Styles.Check />
                    </Styles.FormGroup>
                </Styles.FormDivider>
            </Styles.Body>
            <Styles.Footer>
                <Styles.FormDivider style={{ height: "82px;" }}>
                    <Styles.FormGroup>
                        <Styles.Button>등록 완료</Styles.Button>
                    </Styles.FormGroup>
                </Styles.FormDivider>
            </Styles.Footer>
        </Styles.Container>
    )
};

export default AddressCreate



