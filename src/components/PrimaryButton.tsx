import { Box, Button, ButtonProps } from "@mantine/core";
import styles from "./Buttons.module.scss";
import { forwardRef } from "react";
import CustomAnimationButton from "./Animations/CustomAnimationButton";

export type Props = ButtonProps & {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const PrimaryButton = forwardRef<HTMLButtonElement, Props>(
  ({ children, disabled, onClick, type = "button", ...rest }, ref) => {
    return (
      <Box p={5}>
        {disabled ? (
          <PrimaryButtonInner disabled={disabled} onClick={onClick} type={type} {...rest} ref={ref}>
            {children}
          </PrimaryButtonInner>
        ) : (
          <CustomAnimationButton>
            <PrimaryButtonInner disabled={disabled} onClick={onClick} type={type} {...rest} ref={ref}>
              {children}
            </PrimaryButtonInner>
          </CustomAnimationButton>
        )}
      </Box>
    );
  },
);

const PrimaryButtonInner = forwardRef<HTMLButtonElement, Props>(
  ({ children, onClick, type = "button", ...rest }, ref) => {
    return (
      <Button className={styles.primary} onClick={onClick} type={type} radius={12} {...rest} ref={ref}>
        {children}
      </Button>
    );
  },
);

export default PrimaryButton;
