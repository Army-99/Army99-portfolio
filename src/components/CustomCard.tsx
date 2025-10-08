import { Card, CardProps } from "@mantine/core";
import classes from "./CustomCard.module.css";

export default function CustomCard({ children, ...rest }: CardProps) {
  return (
    <Card className={classes.transparentCard} radius={"md"} p={"lg"} {...rest}>
      {children}
    </Card>
  );
}
