import { Button, Space, Stack, Text, useMantineTheme } from "@mantine/core";
import { IconActivity, IconHome, IconMan, IconNews } from "@tabler/icons-react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

type NavbarProps = { toggle: () => void };

function Navbar(props: NavbarProps) {
    return (
        <Stack>
            <Space></Space>
            <NavLinkCustom {...props} label="ABOUT" icon={IconHome} to="/" />
            <NavLinkCustom {...props} label="EXPERIENCE" icon={IconMan} to="/experience" />
            <NavLinkCustom {...props} label="PROJECTS" icon={IconNews} to="/projects" />
        </Stack>
    );
}

type NavLinkCustomProps = NavbarProps & { label: string; icon: typeof IconActivity; to: string };

function NavLinkCustom(props: NavLinkCustomProps) {
    const theme = useMantineTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const isActive = location.pathname === props.to;

    function onClick(e: React.MouseEvent) {
        e.preventDefault();
        navigate(props.to);
        props.toggle();
    }

    return (
        <Button
            onClick={onClick}
            leftSection={<props.icon size="2rem" stroke={1.5} color={isActive ? theme.colors.site[3] : theme.colors.site[3]} />}
            variant={isActive ? "filled" : "light"}
            color={theme.colors.site[3]}
        >
            <Text size="xl" fw={isActive ? 700 : 500} style={{ color: isActive ? theme.colors.site[0] : theme.colors.site[3] }}>
                {props.label}
            </Text>
        </Button>
    );
}

export default Navbar;
