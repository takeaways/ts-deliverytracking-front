import styled from 'styled-components';

interface MenubarProps {
	/** 가로 사이즈(기본 113px) */
	width?: number | undefined;
	/** 사이즈 */
	size?: 'small' | 'middle' | 'large';
}

const Menubar = styled.div<MenubarProps>`
    position: relative;
    z-index: 14;
    width: ${(props) => {
			console.log('ssss', props);
			return props.width ? props.width : 168;
		}}px;
    box-shadow: 5px 5px 10px 0 rgba(212, 212, 212, 0.5);
    border: solid 1px var(--pale-lilac);
    background-color: #ffffff;

    button {
        display: block;
        width: 100%;
        border: 0;
        background-color: #fff;
        text-align: left;
        height: 30px;
        padding: 0 9px;
        font-size: 12px;
        font-weight: normal;
        line-height: 1.33;
        letter-spacing: -0.5px;
        color: var(--block);

        ${(props) =>
					props.size &&
					props.size === 'small' &&
					`
            height: 30px;
            padding: 0 9px;
            font-size: 16px;
            font-weight: normal;
        `}

        ${(props) =>
					props.size &&
					props.size === 'middle' &&
					`
            height: 32px;
            padding: 0 12px;
            font-size: 18px;
            font-weight: normal;
        `}

        ${(props) =>
					props.size &&
					props.size === 'large' &&
					`
            height: 36px;
            padding: 3px 14px;
            font-size: 20px;
            font-weight: normal;
        `}

        &:hover {
            background-color: #e9f1fe;
        }
    }
`;

export default Menubar;
