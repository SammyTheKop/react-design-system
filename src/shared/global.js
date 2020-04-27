import { createGlobalStyle, css } from "styled-components";

export const bodyStyles = css``;

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900');

  body {
    ${bodyStyles}
    margin: 16px;
  }
`;
