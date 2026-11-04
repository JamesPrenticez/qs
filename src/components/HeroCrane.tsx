import styled from "styled-components";
import { color } from "../theme";

/**
 * Hero decoration: Sydney skyline on the left, tower crane + apartment block under
 * construction on the right, with the pallet of bricks hanging half way up (--p = 0.5).
 * Parent must be position: relative.
 */

const Sky = styled.svg`
  position: absolute;
  left: 0;
  bottom: 6px; /* sit on the hazard tape */
  width: 100%;
  height: calc(100% - 6px);
  pointer-events: none;
  @media (max-width: 700px) { opacity: 0.4; }
`;

const Svg = styled.svg`
  position: absolute;
  top: 0;
  right: 3%;
  height: 100%;
  aspect-ratio: 480 / 710;
  pointer-events: none;
  --p: 0.5; /* lift progress 0..1 */

  @media (max-width: 700px) { opacity: 0.3; }

  .load { transform: translateY(calc(var(--p) * -490px)); }
  .cable { transform: scaleY(calc(1 - var(--p) * 0.9263)); transform-box: fill-box; transform-origin: top; }
`;

const G = 880; // crane scene ground line
const SG = 320; // skyline ground line
const CRANE = color.gold;
// [x, width, height]
const cbd: [number, number, number][] = [[700, 40, 108], [745, 30, 150], [830, 44, 198], [880, 36, 132], [985, 50, 180], [1040, 40, 120]];
const sails: [number, number, number][] = [[70, 80, 78], [140, 70, 60], [200, 60, 45], [250, 70, 66], [305, 55, 48]];
const sail = (x: number, w: number, h: number) =>
  `M${x} ${SG}C${x} ${SG - h * 0.6} ${x + w * 0.3} ${SG - h} ${x + w} ${SG - h}C${x + w * 0.85} ${SG - h * 0.5} ${x + w * 0.9} ${SG - h * 0.2} ${x + w} ${SG}Z`;

export function HeroCrane() {
  return (
    <>
    <Sky viewBox="0 0 1100 340" preserveAspectRatio="xMinYMax meet" aria-hidden="true">
      <defs>
        <pattern id="bg-win" width="10" height="14" patternUnits="userSpaceOnUse">
          <rect x="3" y="4" width="4" height="6" fill={color.gold} opacity="0.16" />
        </pattern>
      </defs>
      <rect x="0" y={SG} width="1100" height="20" fill={color.steel2} />
      {[...cbd, [0, 50, 180]].map(([x, w, h]) => (
        <g key={x}>
          <rect x={x} y={SG - h} width={w} height={h} fill={x ? color.steel : color.steel2} />
          <rect x={x} y={SG - h} width={w} height={h} fill="url(#bg-win)" />
        </g>
      ))}
      <g fill={color.steel2}>
        {/* Sydney Tower */}
        <rect x="934" y="120" width="8" height={SG - 120} />
        <path d="M920 150L956 150L962 130L914 130Z" />
        <rect x="936" y="80" width="4" height="40" />
        {/* Opera House */}
        <rect x="40" y={SG - 12} width="320" height="12" />
        {sails.map(([x, w, h]) => <path key={x} d={sail(x, w, h)} />)}
        {/* Harbour Bridge */}
        <rect x="395" y="296" width="400" height="5" />
        <rect x="380" y="240" width="22" height={SG - 240} />
        <rect x="788" y="240" width="22" height={SG - 240} />
      </g>
      <g stroke={color.steel2} fill="none">
        <path d="M391 298Q595 98 799 298" strokeWidth="8" />
        {Array.from({ length: 15 }, (_, i) => {
          const t = (i + 1) / 16; // hanger positions along the arch
          return <line key={i} x1={391 + 408 * t} x2={391 + 408 * t} y1={298 - 400 * t * (1 - t)} y2="298" strokeWidth="2" />;
        })}
      </g>
    </Sky>
    <Svg viewBox="1100 190 480 710" preserveAspectRatio="xMaxYMax meet" aria-hidden="true">
      <defs>
        <pattern id="bg-brick" width="14" height="8" patternUnits="userSpaceOnUse">
          <rect width="14" height="8" fill="#c0643f" />
          <path d="M0 0H14M0 4H14M0 0V4M7 4V8" stroke={color.ink} strokeOpacity="0.5" />
        </pattern>
        <pattern id="bg-lattice" width="18" height="18" patternUnits="userSpaceOnUse">
          <path d="M0 18L18 0M0 0L18 18" stroke={CRANE} strokeWidth="1.5" />
        </pattern>
      </defs>

      <rect x="1100" y={G} width="480" height="20" fill={color.steel2} />

      {/* apartment block under construction */}
      <rect x="1170" y={G - 300} width="140" height="300" fill={color.steel2} />
      <rect x="1170" y={G - 300} width="140" height="300" fill="url(#bg-win)" />
      <g fill={color.concrete} opacity="0.6">
        {[574, 482, 390, 294].map((y) => <rect key={y} x="1166" y={y} width="148" height="6" />)}
        {[1170, 1237, 1304].map((x) => <rect key={x} x={x} y="300" width="6" height="274" />)}
      </g>

      {/* materials yard: static brick piles next to the pickup spot */}
      <rect x="1285" y="852" width="52" height="28" fill="url(#bg-brick)" />
      <rect x="1342" y="836" width="52" height="44" fill="url(#bg-brick)" />

      {/* tower crane */}
      <g fill="none" stroke={CRANE} strokeWidth="2" opacity="0.85">
        <rect x="1431" y="260" width="18" height={G - 260} fill="url(#bg-lattice)" />
        <rect x="1060" y="260" width="500" height="18" fill="url(#bg-lattice)" />
        <path d="M1416 260L1440 200L1464 260M1440 200L1070 260M1440 200L1550 260" />
        <rect x="1530" y="278" width="36" height="34" fill={CRANE} />
        <rect x="1452" y="280" width="18" height="24" fill={CRANE} />

        {/* trolley parked over the building */}
        <g transform="translate(-120 0)">
          <rect x="1342" y="278" width="16" height="8" fill={CRANE} />
          <rect className="cable" x="1349" y="286" width="2" height="529" fill={CRANE} />
          <g className="load">
            <path d="M1350 815L1305 836M1350 815L1395 836" strokeWidth="1.5" />
            <rect x="1344" y="808" width="12" height="8" fill={CRANE} />
            <rect x="1305" y="836" width="90" height="36" fill="url(#bg-brick)" stroke="none" />
            <rect x="1305" y="872" width="90" height="8" fill="#6b5a3a" stroke="none" />
          </g>
        </g>
      </g>
    </Svg>
    </>
  );
}
