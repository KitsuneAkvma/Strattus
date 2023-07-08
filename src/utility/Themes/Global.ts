/* eslint-disable @typescript-eslint/no-explicit-any */
import { createGlobalStyle } from 'styled-components';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { colors } from './variables';

export const GlobalStyles = createGlobalStyle`
*{
  padding:0;
  margin:0;
  font-family:'Roboto', sans-serif;
  list-style:none;
};

 body {
  width:100vw;
  background: ${({ theme }) => theme.colors.secondBackground};
  
  color: ${({ theme }: any) => theme.colors.color};
  font-size:16px;
  background-color: ${colors.bgDark};
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
