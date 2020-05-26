import styled from 'styled-components';
import { Link as L } from 'react-router-dom';

// 네비바 커버
export const Container = styled.div`
	margin-top: 60px;
	list-style: none;
	padding-left: 43px;
	box-sizing: border-box;
	padding-bottom: 10px;
	border-bottom: 3px solid #cecece;

	.select {
		padding-bottom: 6px;
		border-bottom: 4px solid #3e3e3e;
		color: #3e3e3e;
	}

	@media screen and (max-width: 360px) {
		padding: 0 20px;
		width: 360px;
	}
`;

// 네비바
export const Navbar = styled.ul`
	margin: 0;
	padding: 0;
	display: flex;
	width: 100%;
	justify-content: flex-start;
	@media screen and (max-width: 360px) {
		justify-content: space-around;
	}
`;
export const Item = styled.li`
	display: inline-block;
	padding-right: 34px;
	height: 24px;
	@media screen and (max-width: 360px) {
		padding-right: 0px;
		box-sizing: content-box;
	}
`;
export const Link = styled(L)`
	&:hover {
		font-weight: 600;
		color: #3e3e3e;
	}
	font-size: 20px;
	color: #999999;
	text-decoration: none;
`;
