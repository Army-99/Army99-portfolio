import { Stack } from "@mantine/core";
import CustomHeaderLink from "./CustomHeaderLink";
import useLayoutStore from "../../store/layout.store";

export default function CustomNavbar() {
  const toggleMobileMenu = useLayoutStore((s) => s.toggleMobileMenu);

  return (
    <Stack align="center" gap={"xl"} mt={20}>
      <CustomHeaderLink label="Who Am I" valueToScroll="whoami" onClick={() => toggleMobileMenu()} />
      <CustomHeaderLink label="Experience" valueToScroll="experience" onClick={() => toggleMobileMenu()} />
      <CustomHeaderLink label="Projects" valueToScroll="projects" onClick={() => toggleMobileMenu()} />
    </Stack>
  );
}
