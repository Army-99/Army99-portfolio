import { AppShell, Flex, useMantineTheme } from "@mantine/core";
import CustomHeaderLink from "./CustomHeaderLink";
import { FooterSocial } from "./Footer";
import { useState } from "react";
import ContactModal from "../ModalContact";

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout(props: LayoutProps) {
  // const [modalContact, setModalContact] = useState<CustomModalProps>();
  // const [cookiesBanner, setCookiesBanner] = useState<CustomModalProps>();
  const theme = useMantineTheme();
  const [showModal, setShowModal] = useState(false);

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
        <Flex justify={"space-around"} p={10}>
          <CustomHeaderLink label="Who Am I" valueToScroll="whoami" />
          <CustomHeaderLink label="Experience" valueToScroll="experience" />
          <CustomHeaderLink label="Projects" valueToScroll="projects" />
          <CustomHeaderLink label="Contact Me" valueToScroll="contact" onClick={() => setShowModal(true)} />
        </Flex>
      </AppShell.Header>
      <AppShell.Main style={{ backgroundColor: theme.colors.site[0] }}>
        {props.children}
        {showModal && <ContactModal onClose={() => setShowModal(false)} />}
      </AppShell.Main>
      <AppShell.Footer
        style={{ backgroundColor: theme.colors.site[0], borderTop: `1px solid rgba(255, 255, 255, 0.2)` }}
      >
        <FooterSocial />
      </AppShell.Footer>
    </AppShell>
  );
}
