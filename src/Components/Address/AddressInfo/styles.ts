import styled from "styled-components";

export const Container = styled.div`
	height: 174px;
	width: 250px;
	border-radius: 8px;
	border: solid 1px #979797;
	background-color: #ffffff;
	padding: 20px;

	@media screen and (max-width: 768px) {
		margin-top: 24px;
		width: 684px;
		height: 114px;
	}

	@media screen and (max-width: 360px) {
		width: 320px;
		height: 154px;
	}
`;

export const Title = styled.div`
	font-size: 17px;
	font-weight: 600;
	color: #3e3e3e;
`;
export const Content = styled.p`
	margin-top: 16px;
	font-size: 13px;
	line-height: 1.54;
	color: #989898;
	& > a {
		color: #4ea3f8;
	}
`;
