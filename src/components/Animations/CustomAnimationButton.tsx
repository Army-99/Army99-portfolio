import { HTMLMotionProps, motion } from "framer-motion";

const Motion = motion.div;

type Props = React.PropsWithChildren<Omit<React.HTMLAttributes<HTMLDivElement> & HTMLMotionProps<"div">, "ref">> & {
  delay?: number;
};

export default function CustomAnimationButton({ children, ...rest }: Props) {
  return (
    <Motion
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 350, damping: 22 }}
      style={{ display: "inline-block", width: "100%" }}
      {...rest}
    >
      {children}
    </Motion>
  );
}
