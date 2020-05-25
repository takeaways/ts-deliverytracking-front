import styled from 'styled-components';

const ContentContainer = styled.div`
	padding: 43px;
	padding-top: 60px;
	box-sizing: border-box;

	@media screen and (max-width: 768px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	@media screen and (max-width: 360px) {
		padding: 0px;
		padding-top: 60px;
	}
`;

export default ContentContainer;
