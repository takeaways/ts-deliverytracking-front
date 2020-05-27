import styled from 'styled-components';

interface MenubarProps {
	width?: number | undefined;
	size?: 'small' | 'middle' | 'large';
}

const Menubar = styled.div<MenubarProps>`
    position: relative;
    z-index: 14;
    width: ${(props) => {
			return props.width ? props.width : 168;
		}}px;
    
    border: solid 1px #cdcdcd;
    background-color: #ffffff;
    margin-top: 13px;
	height: 100px;
	border-radius: 4px;
	box-shadow: 2px 2px 3px 0 rgba(122, 122, 122, 0.5);
	  
	display: flex;
	flex-direction: column;
	justify-content: center;
    button {
    
        display: block;
        width: 100%;
        border: 0;
        text-align: left;
        height: 40px;
        padding: 0 9px;
        font-size: 12px;
        font-weight: normal;
        line-height: 1.33;
        letter-spacing: -0.5px;
        color: #3e3e3e;
        background-color: #ffffff;

        ${(props) =>
					props.size &&
					props.size === 'small' &&
					`
            height: 40px;
            padding: 0 9px;
            font-size: 16px;
            font-weight: normal;
        `}

        ${(props) =>
					props.size &&
					props.size === 'middle' &&
					`
            height: 42px;
            padding: 0 12px;
            font-size: 18px;
            font-weight: normal;
        `}

        ${(props) =>
					props.size &&
					props.size === 'large' &&
					`
            height: 46px;
            padding: 3px 14px;
            font-size: 20px;
            font-weight: normal;
        `}

        &:hover {
            background-color: #f4f4f4;
        }
    }
`;

export default Menubar;
