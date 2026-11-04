import { createGlobalStyle } from "styled-components";
import { color, font, grid } from "./theme";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }

  html { color-scheme: dark; scroll-behavior: smooth; scroll-padding-top: 64px; }

  body {
    margin: 0;
    font-family: ${font.body};
    color: ${color.paper};
    background-color: ${color.ink};
    ${grid()}
  }

  /* modal open: freeze the page behind it */
  body:has(dialog[open]) { overflow: hidden; }

  ::selection { color: ${color.ink}; background: ${color.gold}; }

  a { color: ${color.gold}; text-decoration: none; }

  :focus-visible { outline: 3px solid ${color.gold}; outline-offset: 2px; }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { transition: none !important; animation: none !important; scroll-behavior: auto !important; }
  }
`;
