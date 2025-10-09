import { Stack } from "@mantine/core";
import ContactIcons from "./ContactIcons";

export default function ContactSection() {
  return (
    <Stack p={15}>
      <ContactIcons withText />
    </Stack>
  );
}
