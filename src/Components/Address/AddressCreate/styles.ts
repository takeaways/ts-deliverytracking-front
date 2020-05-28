import styled from 'styled-components';

export const Container = styled.form`
	width: 510px;
	height: 421px;
	border-radius: 6px;
	box-shadow: 1px 3px 5px 0 rgba(47, 46, 46, 0.5);
	border: solid 1px #979797;
	background-color: #ffffff;
	padding: 0 26px;

	display: flex;
	flex-direction: column;

	@media screen and (max-width: 360px) {
		width: 360px;
		height: 100vh;
	}
`;
export const Header = styled.div`
	padding-top: 26px;
	height: 15%;

	display: flex;
	justify-content: space-between;
	align-items: flex-start;

	font-family: AppleSDGothicNeo;
	font-weight: bold;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	color: #3d3d3d;
`;
export const HeaderLeft = styled.div`
	font-size: 22px;
`;
export const HeaderRight = styled.div`
	font-size: 22px;
	&:hover {
		cursor: pointer;
	}
`;
export const Body = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	height: 70%;

	@media screen and (max-width: 360px) {
		height: 227px;
	}
`;
export const Footer = styled.div`
	height: 15%;
`;

export const FormDivider = styled.div`
	display: flex;
	justify-content: space-between;

	@media screen and (max-width: 360px) {
		flex-direction: column;
	}
`;
export const FormGroup = styled.div`
	width: 100%;
	height: 62px;
`;
export const Input = styled.input<{ width?: number }>`
	border-radius: 4px;
	border: solid 1px #979797;

	width: ${(props) => (props.width ? props.width : 200)}px;
	height: 42px;
	padding-left: 14px;

	@media screen and (max-width: 360px) {
		width: 228px;
	}
`;
export const Check = styled.input.attrs({
    type: 'checkbox',
})`
	width: 20px;
	height: 20px;
	&::after {
		content: '기본 배송지로 등록';
		width: 105px;
		display: flex;
		align-items: center;

		padding-left: 28px;
		font-family: AppleSDGothicNeo;
		font-size: 14px;
		font-weight: normal;
		font-stretch: normal;
		font-style: normal;
		line-height: normal;
		letter-spacing: normal;
		color: #3d3d3d;
	}
`;
export const Button = styled.button`
	width: 458px;
	height: 48px;
	border-radius: 4px;
	background-color: #ed635e;
	outline: none;
	border: none;

	font-family: AppleSDGothicNeo;
	font-size: 16px;
	font-weight: 600;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	color: #ffffff;

	@media screen and (max-width: 360px) {
		width: 100%;
	}
`;

export const Error = styled.h3`
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	color: #ed635e;
`;
