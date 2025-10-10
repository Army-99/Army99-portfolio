import { AppShell, Burger, Flex, Group, Stack, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import useLayoutStore from "../../store/layout.store";
import ContactSection from "../ContactSection";
import CustomTooltip from "../CustomTooltip";
import CustomHeaderLink from "./CustomHeaderLink";
import CustomNavbar from "./CustomNavbar";
import { FooterSocial } from "./Footer";
import Logo from "../Logo";

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout(props: LayoutProps) {
  // const [modalContact, setModalContact] = useState<CustomModalProps>();
  // const [cookiesBanner, setCookiesBanner] = useState<CustomModalProps>();
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const openedMobileNavbar = useLayoutStore((s) => s.isMobileMenuOpen);
  const toggle = useLayoutStore((s) => s.toggleMobileMenu);

  return (
    <AppShell
      header={{
        height: 60,
      }}
      footer={{
        height: 90,
      }}
      navbar={{
        width: 100,
        breakpoint: "sm",
        collapsed: { mobile: !openedMobileNavbar, desktop: true },
      }}
    >
      <AppShell.Header
        style={{ backgroundColor: theme.colors.site[0], borderBottom: `1px solid rgba(255, 255, 255, 0.2)` }}
      >
        <Group justify="space-between" p={5} ml={10} mr={10}>
          <Stack justify="center" hiddenFrom="sm" h={"100%"}>
            <Burger opened={openedMobileNavbar} onClick={toggle} size="lg" color={"site.2"} />
          </Stack>
          <Logo size={50} />
        </Group>

        <Flex justify={"space-around"} p={10} visibleFrom="sm">
          <CustomHeaderLink label="Who Am I" valueToScroll="whoami" />
          <CustomHeaderLink label="Experience" valueToScroll="experience" />
          <CustomHeaderLink label="Projects" valueToScroll="projects" />
          <CustomTooltip label={<ContactSection />} opened={opened} position="bottom-end">
            <CustomHeaderLink label="Contact Me" onClick={() => setOpened(!opened)} />
          </CustomTooltip>
        </Flex>
      </AppShell.Header>

      <AppShell.Navbar hiddenFrom="sm" bg={"site.3"}>
        <CustomNavbar />
      </AppShell.Navbar>

      <AppShell.Main style={{ backgroundColor: theme.colors.site[0] }}>{props.children}</AppShell.Main>
      <AppShell.Footer
        style={{ backgroundColor: theme.colors.site[0], borderTop: `1px solid rgba(255, 255, 255, 0.2)` }}
      >
        <FooterSocial />
      </AppShell.Footer>
    </AppShell>
  );
}
