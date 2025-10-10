import { Container, Group, Text } from "@mantine/core";
import ContactIcons from "../ContactIcons";
import classes from "./FooterSocial.module.css";

export function FooterSocial() {
  return (
    <Container h={"100%"} className={classes.inner} style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text className="whiteText" size="lg" fw={700} visibleFrom="sm">
        Christian Armato
      </Text>

      {/* <MantineLogo size={28} /> */}

      <Group gap={"md"} className={classes.links} justify="flex-end" wrap="nowrap">
        <ContactIcons />
      </Group>
    </Container>
  );
}
