import { Box, Center, Group, Image, Stack, Text } from "@mantine/core";
import { IconMessage } from "@tabler/icons-react";
import { useEffect, useRef } from "react";
import img from "../../assets/white-black-ca.jpg";
import { useScrollStore } from "../../store/scrollStore";
import PrimaryButton from "../PrimaryButton";
import { useDisclosure } from "@mantine/hooks";
import ContactModal from "../ModalContact";

export default function WhoAmI() {
  const ref = useRef<HTMLDivElement>(null);
  const registerSection = useScrollStore((s) => s.registerSection);

  useEffect(() => {
    registerSection("whoami", ref);
  }, [registerSection]);

  return (
    <Stack h={"50vh"} justify="center" ref={ref} mb={"10vh"}>
      <Center mt={30}>
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

        <Group justify="end" mt={20}>
          <PrimaryButton size={"xl"} onClick={open}>
            <Group>
              <IconMessage size={30} />
              Let’s work together
            </Group>
          </PrimaryButton>
        </Group>
      </Stack>

      {opened && <ContactModal onClose={close} />}
    </>
  );
}
