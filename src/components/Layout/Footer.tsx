import { ActionIcon, Container, Flex, Group, Text, rem, useMantineTheme } from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconPhone } from "@tabler/icons-react";
import classes from "./FooterSocial.module.css";

export function FooterSocial() {
  const theme = useMantineTheme();
  return (
    <Container h={"100%"} className={classes.inner} style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text
        className="whiteText"
        size="lg"
        fw={700}

        // style={{ color: theme.colors.sito[3] }}
      >
        Christian Armato
      </Text>

      {/* <MantineLogo size={28} /> */}

      <Group gap={"md"} className={classes.links} justify="flex-end" wrap="nowrap">
        <Flex align={"center"} gap={"xs"}>
          <ActionIcon
            variant="subtle"
            size={"xl"}
            color={theme.colors.site[2]}
            onClick={() => window.open("mailto:christian.armato99@gmail.com")}
          >
            <IconMail
              // color={theme.colors.sito[3]}

              style={{ width: rem(33), height: rem(36) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Flex>
        <Flex align={"center"} gap={"xs"}>
          <ActionIcon
            variant="subtle"
            size={"xl"}
            color={theme.colors.site[2]}
            onClick={() => window.open("tel:+393289494007")}
          >
            <IconPhone style={{ width: rem(33), height: rem(36) }} stroke={1.5} />
          </ActionIcon>
        </Flex>
        <Flex align={"center"} gap={"xs"}>
          <ActionIcon
            variant="subtle"
            size={"xl"}
            color={theme.colors.site[2]}
            onClick={() => window.open("https://github.com/Army-99")}
          >
            <IconBrandGithub
              // color={theme.colors.sito[3]}

              style={{ width: rem(33), height: rem(36) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Flex>
        <Flex align={"center"} gap={"xs"}>
          <ActionIcon
            variant="subtle"
            size={"xl"}
            color={theme.colors.site[2]}
            onClick={() => window.open("https://www.linkedin.com/in/christian-armato-0419b6179/")}
          >
            <IconBrandLinkedin
              // color={theme.colors.sito[3]}

              style={{ width: rem(33), height: rem(36) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Flex>
      </Group>
    </Container>
  );
}
