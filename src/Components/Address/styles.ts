import styled from 'styled-components';

export const Container = styled.div`
	display: flex;

	@media screen and (min-width: 360px) and (max-width: 768px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

export const LeftContentBlock = styled.div`
	flex-grow: 3;
`;

export const ContentHeader = styled.div`
	margin-bottom: 30px;
	font-size: 20px;
	font-weight: 600;
	color: #3e3e3e;
	display: flex;
	position: relative;
`;
export const ContentText = styled.span`
	position: absolute;
	left: calc(75% - 90px);
	font-size: 16px;
	color: #4ea3f8;
	text-decoration: underline;
	&:hover {
		cursor: pointer;
	}
	@media screen and (min-width: 360px) and (max-width: 768px) {
		left: calc(100% - 40px);
	}
`;

export const RightContentBlock = styled.div`
	flex-grow: 1;
`;
