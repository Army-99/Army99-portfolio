import { NavLink, Text } from "@mantine/core";
import { useScrollStore } from "../../store/scrollStore";
import styles from "./CustomLink.module.scss";
import { forwardRef } from "react";
import { motion } from "framer-motion";

export type CustomLinkProps = {
  label: string;
  valueToScroll?: string;
  hide?: boolean;
  onClick?: () => void;
};

const MotionDiv = motion.div;

const CustomHeaderLink = forwardRef<HTMLAnchorElement, CustomLinkProps>(function CustomHeaderLink(
  { hide, label, valueToScroll, onClick },
  ref
) {
  const scrollTo = useScrollStore((s) => s.scrollTo);

  if (hide) return null;

  return (
    <MotionDiv
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 250, damping: 15 }}
      style={{ display: "inline-block" }}
    >
      <NavLink
        ref={ref}
        maw={150}
        className={styles.link}
        variant="light"
        component="a"
        label={
          <Text ta={"center"} fw={700}>
            {label}
          </Text>
        }
        // data-active={isActive || undefined}
        onClick={(event) => {
          event.preventDefault();
          if (valueToScroll) scrollTo(valueToScroll);
          onClick?.();
        }}
      />
    </MotionDiv>
  );
});

export default CustomHeaderLink;
