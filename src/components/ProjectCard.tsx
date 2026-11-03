import styled from "styled-components";
import { color, img } from "../theme";
import type { Project } from "../data/projects";

const Card = styled.a`
  background-color: rgba(255, 255, 255, 0.9);
  border: ${color.darkGreen} solid 2px;
  border-radius: 10px;
  width: 70%;
  height: 400px;
  justify-self: center;
  padding: 4%;
  margin: 10px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    border-color: ${color.blue};
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    transform: scale(1.01);
  }

  @media (max-width: 800px) {
    width: 80%;
  }

  h4, h6, p {
    font-family: Verdana;
    margin: 0;
    color: black;
  }

  h4 { font-size: 1em; }
  h6, p { font-size: 0.75em; }
`;

const Image = styled.div<{ $src: string }>`
  width: 100%;
  height: 180px;
  border-radius: 10px;
  background: center / cover no-repeat url(${(p) => p.$src});
`;

export function ProjectCard({ title, image, href, details }: Project) {
  return (
    <Card href={href}>
      <Image $src={img(`projects/${image}`)} />
      <h4>{title}</h4>
      {details.map(([label, value]) => (
        <div key={label}>
          <h6>{label}: </h6>
          <p>{value}</p>
        </div>
      ))}
    </Card>
  );
}
