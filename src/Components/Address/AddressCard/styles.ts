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
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: flex-start;
	padding-left: 20px;
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
	padding-right: 20px;
	display: flex;
	align-items: center;
`;
export const CardSetBtn = styled.span`
	display: block;
	text-align: center;
	font-size: 26px;
	width: 26px;
	height: 26px;
	border: 1px solid #e1e1e1;
	border-radius: 50%;
	background-color: #ffffff;
	&:hover {
		cursor: pointer;
		background-color: #3e3e3e;
		color: white;
	}
`;
