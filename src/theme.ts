import { css } from "styled-components";

export const color = {
  gold: "#FFC400", // safety yellow
  ink: "#121314", // asphalt
  steel: "#1c1f22",
  steel2: "#272b2f",
  line: "#3a4046",
  concrete: "#9aa1a8",
  paper: "#ece9e2",
  blue: "#5b8cff", // blueprint
};

export const font = {
  stencil: "'Saira Stencil One', Impact, sans-serif",
  head: "'Barlow Condensed', 'Arial Narrow', sans-serif",
  body: "Barlow, Verdana, sans-serif",
};

/** Yellow/black caution tape. */
export const hazard = css`
  background: repeating-linear-gradient(-45deg, ${color.gold} 0 12px, ${color.ink} 12px 24px);
`;

/** Drafting-paper grid; layer over a background-color. */
export const grid = (alpha = 0.05, size = 32) => css`
  background-image:
    linear-gradient(rgba(255, 255, 255, ${alpha}) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, ${alpha}) 1px, transparent 1px);
  background-size: ${size}px ${size}px;
`;

export const img = (path: string) => `${import.meta.env.BASE_URL}img/${path}`;
