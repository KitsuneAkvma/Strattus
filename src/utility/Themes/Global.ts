/* eslint-disable @typescript-eslint/no-explicit-any */
import { createGlobalStyle } from 'styled-components';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { colors, lightTextColors } from './variables';

export const GlobalStyles = createGlobalStyle`
*{
  padding:0;
  margin:0;
  font-family:'Roboto', sans-serif;
  list-style:none;
  color:${lightTextColors.text1};

  &::-webkit-scrollbar {
	width: 6px;
  height:6px;
	background-color:${colors.primaryLight2};
}
&::-webkit-scrollbar-thumb {
	background-color: #000000;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: ${colors.primaryLight};
}
}

 body {
  width:100vw;
  background: ${({ theme }) => theme.colors.secondBackground};
  
  color: ${({ theme }: any) => theme.colors.color};
  font-size:16px;
  background-color: ${colors.bgDark};
  overflow-x:hidden;
 };

 a {
  font-weight: 500;
  color: ${colors.primary};
  text-decoration: inherit;
 }
 a:hover {
  color: ${colors.primaryHover};
 }
`;
