import { AppShell, Burger, Flex, Stack, useMantineTheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import ContactSection from "../ContactSection";
import CustomTooltip from "../CustomTooltip";
import CustomHeaderLink from "./CustomHeaderLink";
import { FooterSocial } from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout(props: LayoutProps) {
  // const [modalContact, setModalContact] = useState<CustomModalProps>();
  // const [cookiesBanner, setCookiesBanner] = useState<CustomModalProps>();
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [openedMobileNavbar, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{
        height: 60,
      }}
      footer={{
        height: 90,
      }}
    >
      <AppShell.Header
        style={{ backgroundColor: theme.colors.site[0], borderBottom: `1px solid rgba(255, 255, 255, 0.2)` }}
      >
        <Stack justify="center" ml={20} hiddenFrom="sm">
          <Burger opened={openedMobileNavbar} onClick={toggle} size="xl" color={"site.2"} />
        </Stack>

        <Flex justify={"space-around"} p={10} visibleFrom="sm">
          <CustomHeaderLink label="Who Am I" valueToScroll="whoami" />
          <CustomHeaderLink label="Experience" valueToScroll="experience" />
          <CustomHeaderLink label="Projects" valueToScroll="projects" />
          <CustomTooltip label={<ContactSection />} opened={opened} position="bottom-end">
            <CustomHeaderLink label="Contact Me" onClick={() => setOpened(!opened)} />
          </CustomTooltip>
        </Flex>
      </AppShell.Header>
      <AppShell.Main style={{ backgroundColor: theme.colors.site[0] }}>{props.children}</AppShell.Main>
      <AppShell.Footer
        style={{ backgroundColor: theme.colors.site[0], borderTop: `1px solid rgba(255, 255, 255, 0.2)` }}
      >
        <FooterSocial />
      </AppShell.Footer>
    </AppShell>
  );
}
