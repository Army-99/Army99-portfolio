import { Box, Center, Group, Image, Stack, Text, Title } from "@mantine/core";
import { IconMessage } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import img from "../../assets/white-black-ca.jpg";
import { useScrollStore } from "../../store/scrollStore";
import ContactSection from "../ContactSection";
import PrimaryButton from "../PrimaryButton";
import CustomTooltip from "../CustomTooltip";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mantine/hooks";

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
        <Image h={500} w={300} src={img} radius={"lg"} fit="cover" />
      </Center>
      <Center mt={isMobile ? "0" : "20vh"} mb={"10vh"}>
        <Group p={5} gap={"lg"} align="center" justify="center" wrap="nowrap">
          <Specializes />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "linear" }}
          >
            <Image visibleFrom="sm" h={700} w={600} src={img} radius={"lg"} fit="cover" />
          </motion.div>
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
          <PrimaryButton
            leftSection={<IconMessage size={isMobile ? 30 : 40} />}
            mih={75}
            onClick={() => setOpened(!opened)}
          >
            <Group>
              <Title order={isMobile ? 4 : 3}>Let's work together!</Title>
            </Group>
          </PrimaryButton>
        </CustomTooltip>
      </Group>
    </Stack>
  );
}
