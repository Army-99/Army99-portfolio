import { NavLink, Text } from "@mantine/core";
import { useScrollStore } from "../../store/scrollStore";
import styles from "./CustomLink.module.scss";

export type CustomLinkProps = {
  label: string;
  valueToScroll?: string;
  hide?: boolean;
  onClick?: () => void;
};

function CustomHeaderLink({ label, valueToScroll, hide, onClick }: Readonly<CustomLinkProps>) {
  const scrollTo = useScrollStore((s) => s.scrollTo);

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
      // data-active={isActive || undefined}
      onClick={(event) => {
        event.preventDefault();
        if (valueToScroll) scrollTo(valueToScroll);
        onClick?.();
      }}
    />
  );
}

export default CustomHeaderLink;
