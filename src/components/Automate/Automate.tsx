import { Box, Grid, Group, Stack, Title } from "@mantine/core";
import { IconBolt, IconCoinBitcoin, IconRobot, IconSeeding, IconSettings } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Automate() {
  return (
    <Stack justify="center" bg={"site.4"}>
      <Title order={1} ta={"center"} fw={700} className="whiteText" mt={"15vh"}>
        Automate your business
      </Title>
      <Title order={2} ta={"center"} fw={700} className="whiteText">
        Empowering companies through intelligent, data-driven systems.
      </Title>

      <Box p={20} mt={"10vh"} mr={50} ml={50}>
        <Grid grow>
          <Grid.Col span={4}>
            <SkillCard icon={<IconSettings className="whiteText" size={150} />} title="AUTOMATION" />
          </Grid.Col>

          <Grid.Col span={4}>
            <SkillCard icon={<IconCoinBitcoin className="whiteText" size={150} />} title="WEB3" />
          </Grid.Col>

          <Grid.Col span={4}>
            <SkillCard icon={<IconRobot className="whiteText" size={150} />} title="AI" />
          </Grid.Col>

          <Grid.Col span={4}>
            <SkillCard icon={<IconBolt className="whiteText" size={150} />} title="VELOCITY" />
          </Grid.Col>

          <Grid.Col span={4}>
            <SkillCard icon={<IconSeeding className="whiteText" size={150} />} title="GROWTH" />
          </Grid.Col>
        </Grid>
      </Box>
    </Stack>
  );
}

const MotionDiv = motion.div;

function SkillCard({ icon, title }: { icon: ReactNode; title: string }) {
  return (
    <MotionDiv
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring" }}
      style={{ display: "inline-block", width: "100%" }}
    >
      <MotionDiv
        initial={{ opacity: 0, y: 50 }} // stato iniziale
        whileInView={{ opacity: 1, y: 0 }} // stato finale
        transition={{ duration: 1, ease: "easeOut" }} // durata e tipo di animazione
        style={{ minWidth: 400, height: 150 }}
      >
        <Group justify="center" wrap="nowrap">
          {icon}

          <Title size={40} ta={"center"} className="whiteText">
            {title}
          </Title>
        </Group>
      </MotionDiv>
    </MotionDiv>
  );
}
