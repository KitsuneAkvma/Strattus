/* eslint-disable @typescript-eslint/no-explicit-any */
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
 body {
  width:100vw;
  height:100vh;
  background: ${({ theme }: any) => theme.colors.background};
  color: ${({ theme }: any) => theme.colors.color};
  font-size:16px;
 };

 a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
 }
 a:hover {
  color: #535bf2;
 }
`
