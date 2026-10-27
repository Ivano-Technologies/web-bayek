/**
 * Bayek loop: the profile cover and back page loop geometry (viewBox 400 x 1000),
 * drawn in currentColor so CSS can tint it. Same artwork as public/assets/bayek-loop.svg.
 * Decorative and static.
 */
export function BayekLoop({ className }: { className?: string }) {
  return (
    <svg
      className={className ? `loop ${className}` : "loop"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 1000"
      preserveAspectRatio="xMaxYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="currentColor">
        <path
          fillOpacity=".10"
          d="M300 40 C170 150 190 330 290 450 C390 570 370 760 120 1000 L250 1000 C470 780 470 560 380 440 C290 320 280 170 400 90 L400 40 Z"
        />
        <path
          fillOpacity=".16"
          d="M400 0 L400 40 C300 40 220 90 190 200 C160 120 190 40 260 0 Z"
        />
        <path
          fillOpacity=".07"
          d="M0 760 C110 610 250 500 400 400 L400 300 C260 380 110 520 0 650 Z"
        />
      </g>
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        vectorEffect="non-scaling-stroke"
        strokeLinecap="round"
      >
        <path
          vectorEffect="non-scaling-stroke"
          d="M300 40 C170 150 190 330 290 450 C390 570 370 760 120 1000 M250 1000 C470 780 470 560 380 440 C290 320 280 170 400 90"
        />
        <path
          vectorEffect="non-scaling-stroke"
          d="M400 40 C300 40 220 90 190 200 C160 120 190 40 260 0"
        />
        <path
          vectorEffect="non-scaling-stroke"
          d="M0 760 C110 610 250 500 400 400 M400 300 C260 380 110 520 0 650"
        />
        <g strokeOpacity=".6">
          <path
            vectorEffect="non-scaling-stroke"
            d="M280 40 C150 150 170 330 270 450 C370 570 350 760 100 1000"
          />
          <path
            vectorEffect="non-scaling-stroke"
            d="M260 40 C130 150 150 330 250 450 C350 570 330 760 80 1000"
          />
          <path
            vectorEffect="non-scaling-stroke"
            d="M240 40 C110 150 130 330 230 450 C330 570 310 760 60 1000"
          />
          <path
            vectorEffect="non-scaling-stroke"
            d="M0 790 C110 640 250 530 400 430"
          />
          <path
            vectorEffect="non-scaling-stroke"
            d="M0 820 C110 670 250 560 400 460"
          />
        </g>
      </g>
    </svg>
  );
}
