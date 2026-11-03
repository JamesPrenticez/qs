import { createGlobalStyle } from "styled-components";
import { color, img } from "./theme";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Verdana;
    color: white;
    background-color: black;
    background-image: url(${img("textures/inflicted.png")});
  }

  ::selection {
    color: white;
    background: black;
  }

  h1, h2 {
    font-family: 'Eagle Lake', cursive;
    margin: 0;
    text-align: center;
  }

  h1 {
    font-size: 2em;
    line-height: 1.5em;
    padding: 10px 0 5px;
  }

  h2 {
    font-size: 1em;
    line-height: 1em;
    color: ${color.gold};
    padding: 5px 0 10px;
  }

  a {
    color: ${color.blue};
    text-decoration: none;
  }
`;
