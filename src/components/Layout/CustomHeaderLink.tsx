import { NavLink, Text } from "@mantine/core";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useScrollStore } from "../../store/scrollStore";
import styles from "./CustomLink.module.scss";

export type CustomLinkProps = {
  label: string;
  valueToScroll: string;
  hide?: boolean;
  onClick?: () => void;
};

function CustomHeaderLink({ label, valueToScroll, hide, onClick }: Readonly<CustomLinkProps>) {
  const location = useLocation();
  const scrollTo = useScrollStore((s) => s.scrollTo);

  const isActive = useMemo(() => location.pathname === valueToScroll, [valueToScroll, location.pathname]);

  if (hide) return null;

  return (
    <NavLink
      maw={150}
      className={styles.link}
      variant="light"
      component="a"
      label={
        <Text ta={"center"} fw={700}>
          {label}
        </Text>
      }
      data-active={isActive || undefined}
      onClick={(event) => {
        event.preventDefault();
        scrollTo(valueToScroll);
        onClick?.();
      }}
    />
  );
}

export default CustomHeaderLink;
