import { Box, Group, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import ContactIcons from "../ContactIcons";
import classes from "./FooterSocial.module.css";
import Logo from "../Logo";

export function FooterSocial() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Box h={"100%"} className={classes.inner} style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Group justify="space-around" w={"100%"}>
        <Stack justify="center" visibleFrom="sm">
          <Group>
            <Logo size={50} />
            <Text className="whiteText" size="lg" fw={700}>
              Christian Armato
            </Text>
          </Group>
        </Stack>

        <Group
          w={isMobile ? "100%" : undefined}
          gap={"md"}
          className={classes.links}
          justify={isMobile ? "space-around" : "flex-end"}
          wrap="nowrap"
        >
          <ContactIcons />
        </Group>
      </Group>
    </Box>
  );
}
