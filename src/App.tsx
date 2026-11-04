import { useState } from "react";
import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { Highlight } from "./components/Highlight";
import { ProjectCard } from "./components/ProjectCard";
import { ProjectModal, type Selected } from "./components/ProjectModal";
import { companies } from "./data/projects";
import { color, font, hazard } from "./theme";

const Navbar = styled.nav`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 12px;
  overflow-x: auto;
  white-space: nowrap;
  background: rgba(18, 19, 20, 0.92);
  backdrop-filter: blur(6px);
  border-bottom: 2px solid ${color.gold};

  strong {
    margin-right: auto;
    padding-right: 16px;
    color: ${color.gold};
    font: 400 1.2rem/1 ${font.stencil};
    letter-spacing: 0.05em;
  }

  a {
    padding: 14px 10px;
    color: ${color.paper};
    font: 600 1rem/1 ${font.head};
    letter-spacing: 0.12em;
    text-transform: uppercase;
    &:hover { color: ${color.gold}; }
  }
`;

const Hero = styled.header`
  text-align: center;
  background-color: rgba(0, 0, 0, 0.55);

  > div { padding: 24px 16px 18px; }

  h1 {
    margin: 0;
    font: 400 clamp(2rem, 5vw, 3.2rem) / 1 ${font.stencil};
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: ${color.gold};
    text-shadow: 4px 4px 0 rgba(0, 0, 0, 0.8);
  }

  p {
    margin: 8px 0 0;
    font: 600 clamp(0.85rem, 2vw, 1.1rem) / 1.3 ${font.head};
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }

  .tape {
    height: 6px;
    ${hazard};
  }
`;

const Counts = styled.dl`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px 32px;
  margin: 16px 0 0;

  div { display: flex; align-items: baseline; gap: 8px; }
  dt { order: 2; color: ${color.concrete}; font: 600 0.8rem/1.2 ${font.head}; letter-spacing: 0.14em; text-transform: uppercase; }
  dd { margin: 0; color: ${color.gold}; font: 400 1.5rem/1.2 ${font.stencil}; }
`;

const Wrap = styled.main`
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 20px 40px;
`;

const SectionHead = styled.div`
  display: flex;
  align-items: stretch;
  margin: 56px 0 24px;
  border-bottom: 2px solid ${color.line};

  .years {
    display: flex;
    align-items: center;
    padding: 0 16px;
    background: ${color.gold};
    color: ${color.ink};
    font: 400 clamp(1.2rem, 3vw, 1.8rem) / 1 ${font.stencil};
    white-space: nowrap;
  }

  h2 {
    margin: 0;
    padding: 10px 16px;
    font: 800 clamp(1.4rem, 3.5vw, 2.2rem) / 1.1 ${font.head};
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  small {
    display: block;
    color: ${color.concrete};
    font: 500 0.9rem/1.2 ${font.body};
    letter-spacing: 0.04em;
    text-transform: none;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  gap: 28px;
`;

/** native <details>: collapsible without any state */
const Also = styled.details`
  margin-top: 28px;
  border: 2px dashed ${color.line};

  summary {
    padding: 12px 16px;
    cursor: pointer;
    color: ${color.gold};
    font: 700 1rem/1 ${font.head};
    letter-spacing: 0.16em;
    text-transform: uppercase;
    &:hover { background: ${color.steel2}; }
  }

  ul {
    columns: 260px;
    column-gap: 32px;
    margin: 0;
    padding: 8px 16px 16px;
    list-style: none;
  }

  li {
    break-inside: avoid;
    padding: 6px 0 6px 18px;
    position: relative;
    border-bottom: 1px solid ${color.line};
    line-height: 1.3;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0.85em;
      width: 8px;
      height: 8px;
      background: ${color.gold};
    }
  }
  li small { display: block; color: ${color.concrete}; font-size: 0.8rem; }
`;

const Highlights = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(360px, 100%), 1fr));
  gap: 32px;
`;

const Footer = styled.footer`
  margin-top: 40px;
  text-align: center;
  background: rgba(0, 0, 0, 0.55);

  .tape { 
    height: 14px;
    ${hazard};
  };
  > div { padding: 36px 16px 48px; color: ${color.concrete}; }

  a {
    margin: 0 10px;
    color: ${color.paper};
    &:hover { color: ${color.gold}; }
  }
`;

// flat list so a project keeps the same sheet number everywhere
const all = companies.flatMap((c) => c.projects.map((p) => ({ p, company: c })));
const sheets = new Map(all.map(({ p }, i) => [p, i + 1]));
const highlights = all.filter(({ p }) => p.feature).sort((a, b) => a.p.feature!.rank - b.p.feature!.rank);
const featured = all.length;
const other = companies.reduce((n, c) => n + c.also.length, 0);
// QS work only, 2016–2021 (hard-coded: a date formula would keep counting past 2021)
const years = 5;
const worked = featured + other;

export default function App() {
  const [open, setOpen] = useState<Selected | null>(null);

  return (
    <>
      <GlobalStyle />
      <Navbar>
        <strong>JP · QS</strong>
        <a href="#highlights">Highlights</a>
        <a href="#portfolio">Portfolio</a>
        <a href="./cv.html">
          <i className="fa fa-fw fa-file-text-o" /> CV
        </a>
      </Navbar>

      <Hero>
        <div>
          <h1>Quantity Surveying</h1>
          <p>James Prentice · Estimating · Schedules of Quantities · Contract Admin</p>
          <Counts>
            <div><dt>Years in industry</dt><dd>{years}</dd></div>
            <div><dt>Projects worked on</dt><dd>{worked}</dd></div>
            <div><dt>2D &amp; 3D take-off</dt><dd>CostX</dd></div>
          </Counts>
        </div>
        <div className="tape" />
      </Hero>

      <Wrap>
        <section id="highlights">
          <SectionHead>
            <span className="years">Top 6</span>
            <h2>
              Highlights
              <small>Click any project for the full breakdown</small>
            </h2>
          </SectionHead>
          <Highlights>
            {highlights.map(({ p, company }) => (
              <Highlight
                key={p.title}
                p={p}
                who={`${company.name.split(" / ")[0]} · ${company.years.slice(0, 4)}`}
                onOpen={() => setOpen({ p, company, sheet: sheets.get(p)! })}
              />
            ))}
          </Highlights>
        </section>

        <section id="portfolio">
          <SectionHead>
            <span className="years">All</span>
            <h2>
              Portfolio
              <small>
                {featured} projects with detail, {other} more delivered
              </small>
            </h2>
          </SectionHead>
        </section>

        {companies.map((c) => (
          <section key={c.id} id={c.id}>
            <SectionHead>
              <span className="years">{c.years}</span>
              <h2>
                {c.name}
                <small>{c.place}</small>
              </h2>
            </SectionHead>

            <Grid>
              {c.projects.map((p) => (
                <ProjectCard key={p.title} p={p} sheet={sheets.get(p)!} onOpen={() => setOpen({ p, company: c, sheet: sheets.get(p)! })} />
              ))}
            </Grid>

            {c.also.length > 0 && (
              <Also open>
                <summary>Also delivered ({c.also.length})</summary>
                <ul>
                  {c.also.map(([name, note]) => (
                    <li key={name}>
                      {name}
                      {note && <small>{note}</small>}
                    </li>
                  ))}
                </ul>
              </Also>
            )}
          </section>
        ))}
      </Wrap>

      <Footer>
        <div className="tape" />
        <div>
          <p>EE = Elemental Estimate · SOQ = Schedule of Quantities · PCG = Project Control Group · P&amp;G = Preliminary &amp; General</p>
          <p>JamesPrenticez&trade; All rights reserved {new Date().getFullYear()}.</p>
          <a href="https://github.com/JamesPrenticez" aria-label="GitHub">
            <i className="fa fa-fw fa-github fa-3x" />
          </a>
          <a href="https://www.linkedin.com/in/jamesprenticez" aria-label="LinkedIn">
            <i className="fa fa-fw fa-linkedin fa-3x" />
          </a>
        </div>
      </Footer>

      <ProjectModal item={open} onClose={() => setOpen(null)} />
    </>
  );
}
