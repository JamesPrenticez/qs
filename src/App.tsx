import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { ProjectCard } from "./components/ProjectCard";
import { projects } from "./data/projects";
import { color } from "./theme";

const Navbar = styled.nav`
  background-color: rgba(0, 0, 0, 0.75);
  opacity: 0.8;
  display: flex;
  justify-content: flex-end;

  a {
    display: block;
    color: ${color.gold};
    font-size: 1.5em;
    padding: 14px 16px;
  }
`;

const Header = styled.header`
  background-color: ${color.darkGreen};
`;

const Grid = styled.main`
  background-color: rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1fr;
  justify-content: space-evenly;
  column-gap: 3px;

  @media (min-width: 500px) { grid-template-columns: repeat(2, 1fr); }
  @media (min-width: 768px) { grid-template-columns: repeat(3, 1fr); }
  @media (min-width: 1200px) { grid-template-columns: repeat(4, 1fr); }
  @media (min-width: 1900px) { grid-template-columns: repeat(5, 1fr); }
`;

const Footer = styled.footer`
  background-color: ${color.darkGreen};
  height: 200px;
  box-sizing: content-box;
  padding-top: 50px;
  text-align: center;

  a {
    color: black;
    &:hover { color: ${color.gold}; }
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar>
        <a href="https://jamesprenticez.github.io/">
          <i className="fa fa-fw fa-home" /> Blog
        </a>
      </Navbar>
      <Header>
        <h1>Quantity Surveying</h1>
        <h2>By James Prentice</h2>
      </Header>
      <Grid>
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </Grid>
      <Footer>
        JamesPrenticez&trade; All rights reserved 2020.
        <br />
        <br />
        <a href="https://github.com/JamesPrenticez">
          <i className="fa fa-fw fa-github fa-4x" />
        </a>
        <a href="https://www.linkedin.com/in/jamesprenticez">
          <i className="fa fa-fw fa-linkedin fa-4x" />
        </a>
      </Footer>
    </>
  );
}
