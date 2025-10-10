import { HTMLMotionProps, motion } from "framer-motion";

const Motion = motion.div;

type Props = React.PropsWithChildren<Omit<React.HTMLAttributes<HTMLDivElement> & HTMLMotionProps<"div">, "ref">> & {
  delay?: number;
};

export default function CustomAnimationShow({ children, ...rest }: Props) {
  return (
    <Motion
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "linear", delay: rest.delay ?? 0 }}
      viewport={{ once: true, amount: 0.33 }}
      {...rest}
    >
      {children}
    </Motion>
  );
}
