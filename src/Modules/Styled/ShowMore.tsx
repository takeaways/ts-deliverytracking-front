import * as React from "react";
import styled from "styled-components";


const Container = styled.div`
  width: 660px;
  height: 50px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border: solid 1px #979797;
  background-color: #ffffff;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover{
    cursor: pointer;
  };
  
  
  
  @media screen and (min-width: 360px) and (max-width: 768px) {
    width: 684px;
  };
  
  @media screen and (max-width:360px){
    width: 360px;
  };
`;

const Text = styled.span`
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #252525;
`;

interface ShowMoreProps {
  onShowMore: () => void
}
const ShowMore: React.FC<ShowMoreProps> = ({ onShowMore }) => {

  return (
    <Container onClick={onShowMore} className={"card"}>
      <Text>더보기</Text>
    </Container>
  )
};

export default ShowMore;