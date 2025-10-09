import { Box, Center, Group, Image, Stack, Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconMessage } from "@tabler/icons-react";
import { useEffect, useRef } from "react";
import img from "../../assets/white-black-ca.jpg";
import { useScrollStore } from "../../store/scrollStore";
import ContactModal from "../ModalContact";
import PrimaryButton from "../PrimaryButton";

export default function WhoAmI() {
  const ref = useRef<HTMLDivElement>(null);
  const registerSection = useScrollStore((s) => s.registerSection);

  useEffect(() => {
    registerSection("whoami", ref);
  }, [registerSection]);

  return (
    <Stack className="gradient" justify="center" ref={ref}>
      <Center mt={"20vh"} mb={"10vh"}>
        <Group p={5} gap={"lg"} align="center" justify="center" wrap="nowrap">
          <Specializes />
          <Image h={700} w={600} src={img} radius={"lg"} fit="cover" />
        </Group>
      </Center>
    </Stack>
  );
}

function Specializes() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Stack p={20}>
        <Box
          maw={700}
          style={{
            justifyContent: "center",
          }}
        >
          <Text ta={"start"} className="whiteText" style={{ fontSize: 30 }}>
            I’m a full-stack developer passionate about automation and Web3 technologies.
          </Text>
          <Text ta={"start"} className="whiteText" style={{ fontSize: 30, marginTop: 20 }}>
            I help businesses streamline operations and bring their ideas to life through efficient, scalable solutions.
          </Text>
        </Box>

        <Group justify="center" mt={20}>
          <PrimaryButton onClick={open} mih={75}>
            <Group>
              <IconMessage size={40} />
              <Title order={3}>Let's work together!</Title>
            </Group>
          </PrimaryButton>
        </Group>
      </Stack>

      {opened && <ContactModal onClose={close} />}
    </>
  );
}
