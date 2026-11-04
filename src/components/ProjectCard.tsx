import type { ReactNode } from "react";
import styled, { css } from "styled-components";
import { color, font, grid, hazard, img } from "../theme";
import type { Project } from "../data/projects";

/* ---------- media: photo, or blueprint placeholder when there is none ---------- */

const Media = styled.div<{ $src?: string }>`
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  display: grid;
  place-items: center;
  border-bottom: 2px solid ${color.line};
  background-color: #0f2236;
  ${grid(0.09, 24)}

  ${(p) =>
    p.$src &&
    css`
      background-image: none;
      &::before {
        content: "";
        position: absolute;
        inset: 0;
        background: center / cover no-repeat url(${p.$src});
        filter: grayscale(0.55) contrast(1.05);
        transition: filter 0.4s, transform 0.5s;
      }
    `}

  /* darken the bottom so badges stay legible */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(transparent 55%, rgba(0, 0, 0, 0.55));
    pointer-events: none;
  }

  > i {
    font-size: 56px;
    color: rgba(255, 196, 0, 0.35);
  }

  > span {
    position: absolute;
    z-index: 1;
  }
`;

export function ProjectMedia({ p, children }: { p: Project; children?: ReactNode }) {
  return (
    <Media $src={p.image ? img(`projects/${p.image}`) : undefined}>
      {!p.image && <i className={`fa fa-${p.icon ?? "building-o"}`} aria-hidden />}
      {children}
    </Media>
  );
}

export const Badge = styled.span`
  top: 10px;
  left: 10px;
  padding: 3px 9px;
  background: ${color.gold};
  color: ${color.ink};
  font: 700 0.8rem/1.2 ${font.head};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const Sheet = styled.span`
  top: 10px;
  right: 10px;
  padding: 3px 7px;
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid ${color.gold};
  color: ${color.gold};
  font: 700 0.8rem/1.2 ${font.head};
  letter-spacing: 0.1em;
`;

/* ---------- card ---------- */

const Card = styled.button`
  all: unset;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background: ${color.steel};
  border: 2px solid ${color.line};
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;

  /* caution tape on top */
  &::before {
    content: "";
    height: 8px;
    ${hazard}
  }

  &:hover,
  &:focus-visible {
    transform: translate(-4px, -4px);
    border-color: ${color.gold};
    box-shadow: 6px 6px 0 ${color.gold};
  }

  &:hover ${Media}::before {
    filter: none;
    transform: scale(1.06);
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 14px 16px 0;

  h3 {
    margin: 0;
    font: 800 1.35rem/1.1 ${font.head};
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }

  .loc {
    margin: 6px 0 14px;
    color: ${color.concrete};
    font-size: 0.85rem;
  }
`;

/** title-block style readout */
export const Stats = styled.dl`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: auto 0 0;
  border: 1px solid ${color.line};

  div {
    padding: 6px 10px;
    min-width: 0;
  }
  div + div {
    border-left: 1px solid ${color.line};
  }
  dt {
    color: ${color.concrete};
    font: 600 0.7rem/1.2 ${font.head};
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }
  dd {
    margin: 0;
    font: 700 1.1rem/1.25 ${font.head};
    color: ${color.paper};
  }
`;

const More = styled.span`
  margin: 14px -16px 0;
  padding: 9px 16px;
  background: ${color.steel2};
  color: ${color.gold};
  font: 700 0.9rem/1 ${font.head};
  letter-spacing: 0.14em;
  text-transform: uppercase;
  transition: background 0.2s, color 0.2s;

  ${Card}:hover &, ${Card}:focus-visible & {
    background: ${color.gold};
    color: ${color.ink};
  }
`;

export function ProjectCard({ p, sheet, onOpen }: { p: Project; sheet: number; onOpen: () => void }) {
  return (
    <Card type="button" onClick={onOpen} aria-label={`${p.title}: view details`}>
      <ProjectMedia p={p}>
        <Badge>{p.tag}</Badge>
        <Sheet>P-{String(sheet).padStart(2, "0")}</Sheet>
      </ProjectMedia>
      <Body>
        <h3>{p.title}</h3>
        <div className="loc">
          <i className="fa fa-map-marker" aria-hidden /> {p.location}
        </div>
        <Stats>
          <div>
            <dt>GFA</dt>
            <dd>{p.gfa}</dd>
          </div>
          <div>
            <dt>Value</dt>
            <dd>{p.value}</dd>
          </div>
        </Stats>
        <More>
          View details <i className="fa fa-long-arrow-right" aria-hidden />
        </More>
      </Body>
    </Card>
  );
}
