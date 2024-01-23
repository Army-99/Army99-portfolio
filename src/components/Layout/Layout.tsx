import { AppShell, Burger, Container, Flex, Group, Title, useMantineTheme } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { FooterSocial } from "./Footer";
import Navbar from "./Navbar";

type LayoutProps = {
    children: React.ReactNode;
};

export function Layout(props: LayoutProps) {
    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
    const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
    // const [modalContact, setModalContact] = useState<CustomModalProps>();
    // const [cookiesBanner, setCookiesBanner] = useState<CustomModalProps>();
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 300,
                breakpoint: "sm",
                collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
            }}
            footer={{
                height: 90,
            }}
        >
            <AppShell.Header style={{ backgroundColor: theme.colors.site[0] }}>
                <Group h="100%" px="md" justify="space-between">
                    <Flex gap={"md"} align={"center"}>
                        <Burger
                            color={theme.colors.site[3]}
                            opened={mobileOpened}
                            onClick={toggleMobile}
                            hiddenFrom="sm"
                            size="sm"
                        />
                        <Burger
                            color={theme.colors.site[3]}
                            opened={desktopOpened}
                            onClick={toggleDesktop}
                            visibleFrom="sm"
                            size="md"
                        />
                        <Flex justify={"center"} align={"center"}>
                            {/* <Image alt="Logo" src={"/Logo.jpg"} width={40} height={40}></Image> */}
                            <Title style={{ color: theme.colors.site[3] }} order={mobile ? 4 : 3}>
                                Christian Armato
                            </Title>
                        </Flex>
                    </Flex>

                    {/* <MantineLogo size={30} /> */}
                    {/* {!mobile && (
                        <Button
                            classNames={classes}
                            color={theme.colors.sito[4]}
                            leftSection={<IconPhone />}
                            onClick={() => {
                                setModalContact({
                                    open: true,
                                    close: () => setModalContact(undefined),
                                    title: "Contattami",
                                });
                            }}
                        >
                            <Text fw={"bold"}>Contattami</Text>
                        </Button>
                    )} */}
                </Group>
            </AppShell.Header>
            <AppShell.Navbar style={{ backgroundColor: theme.colors.site[0] }}>
                <Navbar
                    toggle={() => {
                        toggleMobile();
                        toggleDesktop();
                    }}
                />
            </AppShell.Navbar>
            <AppShell.Main>
                <Container>{props.children}</Container>
            </AppShell.Main>
            <AppShell.Footer style={{ backgroundColor: theme.colors.site[0] }}>
                <FooterSocial />
            </AppShell.Footer>
        </AppShell>
    );
}
