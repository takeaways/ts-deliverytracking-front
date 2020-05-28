import * as React from "react";
import styled from 'styled-components';

const Container = styled.div`
    width: 312px;
    height: 180px;
    border-radius: 6px;
    box-shadow: 1px 3px 5px 0 rgba(47, 46, 46, 0.5);
    border: solid 1px #979797;
    background-color: #ffffff;
`
const Title = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:112px;
    text-align:center;
    font-size: 18px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #2f2f2f;
    border-bottom: 1px solid #aaaaaa;
`
const ItemBlock = styled.div`
    display:flex;
    height:67px;
`
const ItemConfirm = styled.div`
  font-size: 18px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ed635e;
  background-color: #ffffff;
  
  width:156px;
  display:flex;
  justify-content:center;
  align-items:center;
  border-right:0.5px solid #aaaaaa;
  border-bottom-left-radius:10px;
  &:hover{
      cursor: pointer;
  };
`
const ItemCancel = styled.div`
  font-size: 18px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #363636;
  background-color: #ffffff;

  width:156px;
  display:flex;
  justify-content:center;
  align-items:center;
  border-left:0.5px solid #aaaaaa;
  border-bottom-right-radius:10px;
  &:hover{
      cursor: pointer;
  };
`


interface DeletConfirmProps {
    message: string;
    onConfirm: () => void
    onCancel: () => void
}

const DeleteConfirm: React.FC<DeletConfirmProps> = ({message, onConfirm, onCancel}) => {
    return (
        <Container>
            <Title>{message}</Title>
            <ItemBlock>
                <ItemConfirm onClick={onConfirm}>확인</ItemConfirm>
                <ItemCancel onClick={onCancel}>취소</ItemCancel>
            </ItemBlock>
        </Container>
    )
}

export default DeleteConfirm;