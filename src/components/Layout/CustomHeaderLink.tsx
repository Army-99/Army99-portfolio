import { Center, NavLink, Text } from "@mantine/core";
import { forwardRef } from "react";
import { useScrollStore } from "../../store/scrollStore";
import CustomAnimationButton from "../Animations/CustomAnimationButton";
import styles from "./CustomLink.module.scss";

export type CustomLinkProps = {
  label: string;
  valueToScroll?: string;
  hide?: boolean;
  onClick?: () => void;
};

const CustomHeaderLink = forwardRef<HTMLAnchorElement, CustomLinkProps>(function CustomHeaderLink(
  { hide, label, valueToScroll, onClick },
  ref,
) {
  const scrollTo = useScrollStore((s) => s.scrollTo);

  if (hide) return null;

  return (
    <Center>
      <CustomAnimationButton>
        <NavLink
          ref={ref}
          miw={200}
          className={styles.link}
          variant="light"
          component="a"
          label={
            <Text ta={"center"} fw={600} fz={15} style={{ letterSpacing: "0.04em" }}>
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
      </CustomAnimationButton>
    </Center>
  );
});

export default CustomHeaderLink;
