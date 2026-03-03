import { HTMLMotionProps, motion } from "framer-motion";

const Motion = motion.div;

type Props = React.PropsWithChildren<Omit<React.HTMLAttributes<HTMLDivElement> & HTMLMotionProps<"div">, "ref">> & {
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
};

const OFFSET = 28;

const directionMap: Record<NonNullable<Props["direction"]>, { x?: number; y?: number }> = {
  up: { y: OFFSET },
  down: { y: -OFFSET },
  left: { x: OFFSET },
  right: { x: -OFFSET },
  none: {},
};

export default function CustomAnimationShow({ children, direction = "up", ...rest }: Props) {
  const translate = directionMap[direction];

  return (
    <Motion
      initial={{ opacity: 0, ...translate }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration: 0.55,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: rest.delay ?? 0,
      }}
      viewport={{ once: true, amount: 0.12 }}
      {...rest}
    >
      {children}
    </Motion>
  );
}
