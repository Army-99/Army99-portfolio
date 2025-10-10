import { Box, Center, Group, Image, Stack, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconMessage } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import img from "../../assets/white-black-ca.jpg";
import { useScrollStore } from "../../store/scrollStore";
import ContactSection from "../ContactSection";
import CustomAnimationShow from "../Animations/CustomAnimationShow";
import CustomTooltip from "../CustomTooltip";
import PrimaryButton from "../PrimaryButton";

export default function WhoAmI() {
  const ref = useRef<HTMLDivElement>(null);
  const registerSection = useScrollStore((s) => s.registerSection);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    registerSection("whoami", ref);
  }, [registerSection]);

  return (
    <Stack className="gradient" justify="center" ref={ref}>
      <Center hiddenFrom="sm">
        <CustomAnimationShow>
          <Image h={500} w={300} src={img} radius={"lg"} fit="cover" />
        </CustomAnimationShow>
      </Center>
      <Center mt={isMobile ? "0" : "20vh"} mb={"10vh"}>
        <Group p={5} gap={"lg"} align="center" justify="center" wrap="nowrap">
          <Specializes />
          <CustomAnimationShow>
            <Image visibleFrom="sm" h={700} w={600} src={img} radius={"lg"} fit="cover" />
          </CustomAnimationShow>
        </Group>
      </Center>
    </Stack>
  );
}

function Specializes() {
  const [opened, setOpened] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Stack p={20}>
      <Box
        maw={700}
        style={{
          justifyContent: "center",
        }}
      >
        <Stack>
          <Text ta={isMobile ? "center" : "start"} className="whiteText" fz={isMobile ? 20 : 30}>
            I’m a full-stack developer passionate about automation and Web3 technologies.
          </Text>
          <Text
            ta={isMobile ? "center" : "start"}
            className="whiteText"
            fz={isMobile ? 20 : 30}
            style={{ marginTop: 20 }}
          >
            I help businesses streamline operations and bring their ideas to life through efficient, scalable solutions.
          </Text>
        </Stack>
      </Box>

      <Group justify="center" mt={20}>
        <CustomTooltip label={<ContactSection />} opened={opened}>
          <Box>
            <PrimaryButton
              leftSection={<IconMessage size={isMobile ? 30 : 40} />}
              mih={75}
              onClick={() => setOpened(!opened)}
            >
              <Title order={isMobile ? 4 : 3}>Let's work together!</Title>
            </PrimaryButton>
          </Box>
        </CustomTooltip>
      </Group>
    </Stack>
  );
}
