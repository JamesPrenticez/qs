import { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { color, font, grid, hazard } from "../theme";
import type { Company, Project } from "../data/projects";
import { Badge, ProjectMedia } from "./ProjectCard";

export interface Selected {
  p: Project;
  company: Company;
}

const pop = keyframes`
  from { opacity: 0; transform: translateY(24px) scale(0.97); }
`;

const Dialog = styled.dialog`
  padding: 0;
  border: 2px solid ${color.gold};
  background: ${color.steel};
  color: ${color.paper};
  width: min(920px, 94vw);
  max-width: none;
  max-height: 92vh;
  overflow-y: auto;
  box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.6);

  &[open] { animation: ${pop} 0.25s ease-out; }
  &::backdrop { background: rgba(0, 0, 0, 0.82); backdrop-filter: blur(3px); }
`;

const Tape = styled.div`
  height: 12px;
  ${hazard}
`;

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 8px 6px 16px;
  background: ${color.ink};
  color: ${color.gold};
  font: 700 0.85rem/1 ${font.head};
  letter-spacing: 0.18em;
  text-transform: uppercase;

  button {
    all: unset;
    cursor: pointer;
    padding: 8px 12px;
    font-size: 1.1rem;
    &:hover { background: ${color.gold}; color: ${color.ink}; }
  }
`;

/* wide crop of the shared media block */
const Hero = styled.div`
  > div { aspect-ratio: 21 / 8; }
  /* true-colour photo, no grayscale or overlay */
  > div::before { filter: none; }
  > div::after { display: none; }
`;

const Head = styled.div`
  padding: 20px 24px 0;
  ${Badge} { position: static; display: inline-block; margin-bottom: 10px; }

  h3 {
    margin: 0;
    font: 800 clamp(1.8rem, 5vw, 2.8rem) / 1 ${font.head};
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }
`;

/** drawing title block */
const TitleBlock = styled.dl`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  margin: 20px 24px 0;
  border: 2px solid ${color.line};
  background: ${color.ink};
  ${grid(0.03, 16)}

  div {
    padding: 8px 12px;
    border: 1px solid ${color.line};
    margin: -1px 0 0 -1px;
  }
  dt {
    color: ${color.concrete};
    font: 600 0.7rem/1.2 ${font.head};
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }
  dd {
    margin: 2px 0 0;
    font: 700 1.15rem/1.25 ${font.head};
  }
  .wide { grid-column: 1 / -1; }
  .hi dd { color: ${color.gold}; font-size: 1.4rem; }
`;

const Cols = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 28px;
  padding: 24px;

  @media (max-width: 720px) { grid-template-columns: 1fr; }

  h4 {
    margin: 0 0 10px;
    padding-bottom: 6px;
    border-bottom: 2px solid ${color.gold};
    color: ${color.gold};
    font: 700 1rem/1 ${font.head};
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }
  p { margin: 0; line-height: 1.65; }

  ul { list-style: none; margin: 0; padding: 0; }
  li {
    position: relative;
    padding: 0 0 10px 22px;
    line-height: 1.45;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0.4em;
      width: 10px;
      height: 10px;
      background: ${color.gold};
      transform: rotate(45deg);
    }
  }
`;

const Foot = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding: 0 24px 24px;

  a {
    padding: 10px 18px;
    background: ${color.gold};
    color: ${color.ink};
    font: 800 1rem/1 ${font.head};
    letter-spacing: 0.14em;
    text-transform: uppercase;
    &:hover { background: ${color.paper}; }
  }
`;

export function ProjectModal({ item, onClose }: { item: Selected | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = ref.current!;
    if (item && !d.open) d.showModal();
    else if (!item && d.open) d.close();
  }, [item]);

  const close = () => ref.current?.close(); // fires onClose below

  return (
    <Dialog
      ref={ref}
      onClose={onClose}
      // padding is 0, so a click that lands on the dialog itself is a backdrop click
      onClick={(e) => e.target === e.currentTarget && close()}
      aria-label={item?.p.title}
    >
      {item && (
        <>
          <Tape />
          <Bar>
            <span>Project data</span>
            <button type="button" onClick={close} aria-label="Close">
              <i className="fa fa-times" aria-hidden />
            </button>
          </Bar>
          <Hero>
            <ProjectMedia p={item.p} />
          </Hero>
          <Head>
            <Badge>{item.p.tag}</Badge>
            <h3>{item.p.title}</h3>
          </Head>
          <TitleBlock>
            <div><dt>Company</dt><dd>{item.company.name}</dd></div>
            <div><dt>Period</dt><dd>{item.company.years}</dd></div>
            <div><dt>Location</dt><dd>{item.p.location}</dd></div>
            <div className="hi"><dt>GFA</dt><dd>{item.p.gfa}</dd></div>
            <div className="hi"><dt>Value</dt><dd>{item.p.value}</dd></div>
            <div className="wide"><dt>Role</dt><dd>{item.p.type}</dd></div>
          </TitleBlock>
          <Cols>
            <section>
              <h4>Project notes</h4>
              <p>{item.p.about}</p>
            </section>
            <section>
              <h4>Scope of work</h4>
              <ul>
                {item.p.scope.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </section>
          </Cols>
          {item.p.href && (
            <Foot>
              <a href={item.p.href} target="_blank" rel="noreferrer">
                View project <i className="fa fa-external-link" aria-hidden />
              </a>
            </Foot>
          )}
        </>
      )}
    </Dialog>
  );
}
