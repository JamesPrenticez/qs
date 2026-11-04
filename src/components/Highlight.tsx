import styled from "styled-components";
import { color, font, grid, hazard, img } from "../theme";
import type { Project } from "../data/projects";

const Tile = styled.button`
  all: unset;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-width: 0;
  cursor: pointer;
  background: ${color.steel};
  border: 2px solid ${color.line};
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;

  &::before {
    content: "";
    height: 10px;
    ${hazard}
  }

  &:hover,
  &:focus-visible {
    transform: translate(-4px, -4px);
    border-color: ${color.gold};
    box-shadow: 8px 8px 0 ${color.gold};
  }
`;

/** photo in full colour, nothing laid over it except the employer tag */
const Photo = styled.div<{ $src: string }>`
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-bottom: 2px solid ${color.line};

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: center / cover no-repeat url(${(p) => p.$src});
    transition: transform 0.5s;
  }
  ${Tile}:hover &::before { transform: scale(1.05); }

  span {
    position: absolute;
    top: 12px;
    left: 12px;
    padding: 4px 10px;
    background: ${color.gold};
    color: ${color.ink};
    font: 700 0.9rem/1.2 ${font.head};
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 8px;
  padding: 16px 20px 22px;
  min-width: 0;
  ${grid(0.03, 16)}

  .fig {
    display: flex;
    align-items: baseline;
    gap: 12px;
    padding-bottom: 10px;
    margin-bottom: 2px;
    border-bottom: 2px solid ${color.line};
  }
  .label {
    color: ${color.concrete};
    font: 600 0.8rem/1.2 ${font.head};
    letter-spacing: 0.18em;
    text-transform: uppercase;
    order: 2;
  }
  .big {
    color: ${color.gold};
    font: 400 clamp(1.8rem, 3vw, 2.4rem) / 1.1 ${font.stencil};
    overflow-wrap: anywhere;
  }

  h3 {
    margin: 0;
    font: 800 clamp(1.3rem, 2vw, 1.6rem) / 1.1 ${font.head};
    letter-spacing: 0.02em;
    text-transform: uppercase;
    overflow-wrap: anywhere;
  }
  p {
    margin: 0;
    line-height: 1.45;
    overflow-wrap: anywhere;
  }
`;

export function Highlight({ p, who, onOpen }: { p: Project; who: string; onOpen: () => void }) {
  // lead with the dollar figure; fall back to floor area when there isn't one
  const est = p.value.endsWith(" (est.)");
  const [label, big] = p.value === "N/a" ? ["GFA", p.gfa] : [est ? "Value (est.)" : "Value", p.value.replace(" (est.)", "")];
  return (
    <Tile type="button" onClick={onOpen} aria-label={`${p.title}: view details`}>
      <Photo $src={img(`projects/${p.image}`)}>
        <span>{who}</span>
      </Photo>
      <Info>
        <div className="fig">
          <span className="label">{label}</span>
          <span className="big">{big}</span>
        </div>
        <h3>{p.title}</h3>
        <p>{p.feature!.pitch}</p>
      </Info>
    </Tile>
  );
}
