import styled from 'styled-components';

export const Container = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: #fff;

	.topbar {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		height: 54px;
		z-index: 12;
		background-color: rgb(7, 27, 50);
	}

	.loading-text {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate3d(-50%, -50%, 0px);
		font-size: 21px;
		color: var(--black);
	}
`;
