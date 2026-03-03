import { Tooltip, TooltipProps } from "@mantine/core";
import styles from "./CustomTooltip.module.scss";

export default function CustomTooltip({ ...rest }: TooltipProps) {
  return (
    <Tooltip
      style={{
        pointerEvents: "auto",
      }}
      classNames={styles}
      arrowOffset={75}
      arrowSize={25}
      withArrow
      position="top-start"
      {...rest}
    >
      {rest.children}
    </Tooltip>
  );
}
