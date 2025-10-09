import { Button, ButtonProps } from "@mantine/core";
import { motion } from "framer-motion";
import { forwardRef } from "react";
import styles from "./Buttons.module.scss";

export type Props = ButtonProps & {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const MotionDiv = motion.div;

const PrimaryButton = forwardRef<HTMLButtonElement, Props>(({ children, onClick, type = "button", ...rest }, ref) => {
  return (
    <MotionDiv
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 250, damping: 15 }}
      style={{ display: "inline-block" }}
    >
      <Button ref={ref} variant="filled" onClick={onClick} type={type} {...rest} className={styles.primary}>
        {children}
      </Button>
    </MotionDiv>
  );
});

export default PrimaryButton;
