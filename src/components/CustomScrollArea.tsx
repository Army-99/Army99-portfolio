import { ScrollArea, ScrollAreaProps } from "@mantine/core";
import classes from "./CustomScrollArea.module.scss";

type Props = ScrollAreaProps;

export default function CustomScrollArea(props: Props) {
  return <ScrollArea classNames={classes} type="always" h={"90dvh"} offsetScrollbars scrollbars="y" {...props} />;
}
