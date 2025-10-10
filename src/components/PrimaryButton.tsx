import { Button, ButtonProps } from "@mantine/core";
import { forwardRef } from "react";
import CustomAnimationButton from "./Animations/CustomAnimationButton";
import styles from "./Buttons.module.scss";

export type Props = ButtonProps & {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const PrimaryButton = forwardRef<HTMLButtonElement, Props>(({ children, onClick, type = "button", ...rest }, ref) => {
  return (
    <CustomAnimationButton>
      <Button ref={ref} variant="filled" onClick={onClick} type={type} {...rest} className={styles.primary}>
        {children}
      </Button>
    </CustomAnimationButton>
  );
});

export default PrimaryButton;
