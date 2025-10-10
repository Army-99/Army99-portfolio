import { Box, Center, Grid, Stack, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconBolt, IconCoinBitcoin, IconRobot, IconSeeding, IconSettings } from "@tabler/icons-react";
import { ReactNode, useMemo } from "react";
import CustomAnimationButton from "../Animations/CustomAnimationButton";
import CustomAnimationShow from "../Animations/CustomAnimationShow";

export default function Automate() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const iconSize = useMemo(() => (isMobile ? 75 : 150), [isMobile]);

  return (
    <Stack justify="center" bg={"site.4"}>
      <Box ml={50} mr={50}>
        <Title fz={isMobile ? 40 : 80} ta={"center"} fw={700} className="whiteText" mt={"15vh"}>
          Automate your business
        </Title>
        <Title order={isMobile ? 4 : 2} ta={"center"} fw={700} className="whiteText">
          Empowering companies through intelligent, data-driven systems.
        </Title>

        <Box p={20} mt={"10vh"}>
          <Grid grow>
            <Grid.Col span={isMobile ? 12 : 4}>
              <SkillCard icon={<IconSettings className="whiteText" size={iconSize} />} title="AUTOMATION" />
            </Grid.Col>

            <Grid.Col span={isMobile ? 12 : 4}>
              <SkillCard icon={<IconCoinBitcoin className="whiteText" size={iconSize} />} title="WEB3" />
            </Grid.Col>

            <Grid.Col span={isMobile ? 12 : 4}>
              <SkillCard icon={<IconRobot className="whiteText" size={iconSize} />} title="AI" />
            </Grid.Col>

            <Grid.Col span={isMobile ? 12 : 4}>
              <SkillCard icon={<IconBolt className="whiteText" size={iconSize} />} title="VELOCITY" />
            </Grid.Col>

            <Grid.Col span={isMobile ? 12 : 4}>
              <SkillCard icon={<IconSeeding className="whiteText" size={iconSize} />} title="GROWTH" />
            </Grid.Col>
          </Grid>
        </Box>
      </Box>
    </Stack>
  );
}

function SkillCard({ icon, title }: { icon: ReactNode; title: string }) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <CustomAnimationButton>
      <CustomAnimationShow style={{ minWidth: isMobile ? undefined : 400, height: 150 }}>
        <Center>
          {icon}
          <Title order={isMobile ? 3 : 2} ta={"center"} className="whiteText">
            {title}
          </Title>
        </Center>
      </CustomAnimationShow>
    </CustomAnimationButton>
  );
}
