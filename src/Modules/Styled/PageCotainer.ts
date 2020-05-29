import styled from 'styled-components';

const PageContainer = styled.div`
	padding-top: 50px;
	width: 1024px;
	margin: 0 auto;

	@media screen and (max-width: 768px) {
		flex-direction: column;
		justify-content: center;
		width: 768px;
		align-items: center;
	}

	@media screen and (max-width: 360px) {
		width: 360px;
	}
`;

export default PageContainer;
