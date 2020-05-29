import styled from 'styled-components';

export const Container = styled.div`
	width: 660px;

	@media screen and (max-width: 768px) {
		width: 684px;
	}

	@media screen and (max-width: 360px) {
		width: 360px;
	}
`;
export const Card = styled.div`
	border: solid 1px #979797;
	background-color: #ffffff;

	display: flex;
	justify-content: space-between;

	height: 85px;
`;
export const CardRight = styled.div`
	padding-right: 20px;
	display: flex;
	align-items: center;

	position: relative;
`;
export const CardZip = styled.span`
	font-size: 16px;
	font-weight: 600;
	color: #3e3e3e;
`;
export const Default = styled.span`
	display: inline-block;

	width: 45.9px;
	height: 22px;
	font-size: 14px;
	text-align: center;
	line-height: 22px;

	border-radius: 5px;
	background-color: #ff5b5c;

	font-weight: 600;
	color: #ffffff;
`;
export const CardAddress = styled.span`
	font-size: 14px;
	color: #989898;
`;

export const CardLeft = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: flex-start;
	padding-left: 20px;
`;
export const CardSetBtn = styled.div`
	font-size: 26px;
	width: 26px;
	height: 26px;
	border: 1px solid #e1e1e1;
	border-radius: 50%;
	background-color: #ffffff;
	color: #5e5e5e;

	display: flex;
	justify-content: center;
	align-items: center;

	& svg {
		width: 26px;
		height: 26px;
		border-radius: 50%;
	}

	&:hover {
		cursor: pointer;
		color: #3e3e3e;
	}
`;

export const CardSet = styled.div`
	width: 166px;
	height: 100px;
	border-radius: 4px;
	box-shadow: 2px 2px 3px 0 rgba(122, 122, 122, 0.5);
	border: solid 1px #cdcdcd;
	background-color: #ffffff;

	position: absolute;
	top: 80%;
	right: 50%;
	z-index: 1;
`;
