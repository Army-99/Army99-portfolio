import { Card } from "@mantine/core";
import classes from "./CustomCard.module.css";
import { PropsWithChildren } from "react";

export default function CustomCard(props: PropsWithChildren) {
    return (
        <Card className={classes.transparentCard} radius={"md"} p={"lg"}>
            {props.children}
        </Card>
    );
}
