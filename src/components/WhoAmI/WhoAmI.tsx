import { Box, Center, Group, Image, Stack, Text, Title } from "@mantine/core";
import { IconMessage } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import img from "../../assets/white-black-ca.jpg";
import { useScrollStore } from "../../store/scrollStore";
import ContactSection from "../ContactSection";
import PrimaryButton from "../PrimaryButton";
import CustomTooltip from "../CustomTooltip";
import { motion } from "framer-motion";

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
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "linear" }}
          >
            <Image h={700} w={600} src={img} radius={"lg"} fit="cover" />
          </motion.div>
        </Group>
      </Center>
    </Stack>
  );
}

function Specializes() {
  const [opened, setOpened] = useState(false);

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
          <CustomTooltip label={<ContactSection />} opened={opened}>
            <PrimaryButton mih={75} onClick={() => setOpened(!opened)}>
              <Group>
                <IconMessage size={40} />
                <Title order={3}>Let's work together!</Title>
              </Group>
            </PrimaryButton>
          </CustomTooltip>
        </Group>
      </Stack>
    </>
  );
}
