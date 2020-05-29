import * as React from "react";
import styled from "styled-components";
import { MdErrorOutline } from "react-icons/md"

const Container = styled.div`
  width: 660px;
  height: 320px;
  border-radius: 8px;
  border: solid 1px #979797;
  background-color: #ffffff;

  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

@media screen and (max-width: 768px) {
	width: 684px;
}

@media screen and (max-width: 360px) {
	width: 360px;
}
  
`
const Icon = styled.span`
    display:block;
    font-size:84px;    
    color:#d3d3d3;
    font-weight:300;
`
const Text = styled.span`
    display:block;
    height: 27px;
    font-family: AppleSDGothicNeo;
    font-size: 22px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #d3d3d3;
`


const Empty: React.FC<{ message: string }> = ({ message }) => {
    return (
        <Container>
            <Icon><MdErrorOutline /></Icon>
            <Text>{message}</Text>
        </Container>
    )
}

export default Empty;