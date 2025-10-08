import { Stack, Title, Space, Box, Grid, Group } from "@mantine/core";
import { IconSettings, IconCoinBitcoin, IconRobot, IconBolt, IconSeeding } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Automate() {
  return (
    <Stack h={"100vh"} justify="center">
      <Title order={1} ta={"center"} fw={700} className="whiteText">
        Automate your business
      </Title>
      <Title order={2} ta={"center"} fw={700} className="whiteText">
        Empowering companies through intelligent, data-driven systems.
      </Title>

      <Space h={50} />

      <Box p={20}>
        <Grid grow>
          <Grid.Col span={4}>
            <SkillCard icon={<IconSettings className="whiteText" size={50} />} title="AUTOMATION" />
          </Grid.Col>

          <Grid.Col span={4}>
            <SkillCard icon={<IconCoinBitcoin className="whiteText" size={50} />} title="WEB3" />
          </Grid.Col>

          <Grid.Col span={4}>
            <SkillCard icon={<IconRobot className="whiteText" size={50} />} title="AI" />
          </Grid.Col>

          <Grid.Col span={4}>
            <SkillCard icon={<IconBolt className="whiteText" size={50} />} title="VELOCITY" />
          </Grid.Col>

          <Grid.Col span={4}>
            <SkillCard icon={<IconSeeding className="whiteText" size={50} />} title="GROWTH" />
          </Grid.Col>
        </Grid>
      </Box>
    </Stack>
  );
}

function SkillCard({ icon, title }: { icon: ReactNode; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // stato iniziale
      whileInView={{ opacity: 1, y: 0 }} // stato finale
      transition={{ duration: 1, ease: "easeOut" }} // durata e tipo di animazione
      style={{ minWidth: 400, height: 150 }}
    >
      <Group justify="center" wrap="nowrap">
        {icon}
        <Title ta={"center"} className="whiteText">
          {title}
        </Title>
      </Group>
    </motion.div>
  );
}
