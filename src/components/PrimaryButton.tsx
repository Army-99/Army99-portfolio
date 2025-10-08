import { Button, ButtonProps } from "@mantine/core";
import styles from "./Buttons.module.scss";

export type Props = ButtonProps & {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export default function PrimaryButton({ children, onClick, type = "button", ...rest }: Props) {
  return (
    <Button className={styles.primary} variant="filled" onClick={onClick} type={type} {...rest}>
      {children}
    </Button>
  );
}
