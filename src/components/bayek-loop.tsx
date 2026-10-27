/**
 * Bayek ribbon: the swoosh on the right of the profile covers (viewBox 400 x 1000).
 * Rendered as an image so each SVG keeps its own gradient ids (bk-, bkg-, bkh-).
 * - default: cover colours, light heroes (Integrated Services, Construction, Contact)
 * - grey: neutral greys for the warm ink footer
 * - hero: Home hero, top band in cover colours, loop and sweep grey
 * Decorative and static.
 */
const SRC = {
  default: "/assets/bayek-loop.svg",
  grey: "/assets/bayek-loop-grey.svg",
  hero: "/assets/bayek-loop-hero.svg",
} as const;

export type BayekLoopVariant = keyof typeof SRC;

export function BayekLoop({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: BayekLoopVariant;
}) {
  return (
    <img
      className={className ? `loop ${className}` : "loop"}
      src={SRC[variant]}
      alt=""
      aria-hidden="true"
    />
  );
}
