import { styled, Button } from '@mui/material';

const CustomMuiButton = styled(Button, { shouldForwardProp: (prop) => prop !== 'minWidth' })<{
	minWidth?: string;
}>`
	min-width: ${({ minWidth }) => minWidth || '165px'};
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 35px 0 35px;
	font-size: 15px;
	background-color: black;
	border-radius: 0;
	text-transform: uppercase;
	font-family: 'Open Sans Condensed';
	font-weight: bolder;
	&:hover {
		color: black;
		background-color: #fff;
		outline: black solid 1px;
	}
`;

export default CustomMuiButton;
