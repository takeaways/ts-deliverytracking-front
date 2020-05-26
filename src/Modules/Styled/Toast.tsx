import styled from 'styled-components';
import * as React from 'react';

interface ToastType {
    message: string;
    duration?: number;
    point?: number;
    onClose: () => void;
}


const Container = styled.div<{ duration: number, point?: number }>`
  width: 400px;
  height: 60px;
  border-radius: 6px;
  background-color: rgba(107, 107, 107, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: calc(50% - 168px);
  bottom: ${props => props.point ? props.point : 40}%;
  
  @-webkit-keyframes fadein {
      from {bottom: ${props => props.point ? props.point : 40}%; opacity: 0;} 
      to {bottom: calc(${props => props.point ? props.point : 40}% + 30px); opacity: 1;}
  }

    @keyframes fadein {
      from {bottom: ${props => props.point ? props.point : 40}%; opacity: 0;}
      to {bottom: calc(${props => props.point ? props.point : 40}% + 30px); opacity: 1;}
    }

@-webkit-keyframes fadeout {
  from {bottom: calc(${props => props.point ? props.point : 40}% + 30px); opacity: 1;} 
  to {bottom: calc(${props => props.point ? props.point : 40}%); opacity: 0;}
}

@keyframes fadeout {
  from {bottom: calc(${props => props.point ? props.point : 40}% + 30px); opacity: 1;}
  to {bottom: calc(${props => props.point ? props.point : 40}% ); opacity: 0;}
}

  -webkit-animation: fadein 1.5s, fadeout 1.5s ${props => (props.duration / 2) / 1000}s;
  animation: fadein 1.5s, fadeout 1.5s ${props => (props.duration / 2) / 1000}s;
`;
const Text = styled.span`
  font-size: 22px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
`;

const Toast: React.FC<ToastType> = ({message, duration = 3000, point = 50, onClose}) => {

    React.useEffect(() => {
        const showTime = setTimeout(() => {
            onClose();
        }, duration - 100);
        return () => {
            clearTimeout(showTime);
        }
    }, []);

    return (
            <Container duration={duration} point={point}>
                <Text>{message}</Text>
            </Container>
    )
};

export default Toast;





