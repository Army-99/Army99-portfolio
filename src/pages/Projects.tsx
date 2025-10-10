import { Box, Group, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import {
  IconBell,
  IconChartBar,
  IconChartPie,
  IconDatabase,
  IconFileImport,
  IconFileSearch,
  IconLock,
  IconSearch,
  IconSettings,
  IconTrendingUp,
} from "@tabler/icons-react";
import { useEffect, useRef } from "react";
import CustomAnimationShow from "../components/Animations/CustomAnimationShow";
import { useScrollStore } from "../store/scrollStore";

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const registerSection = useScrollStore((s) => s.registerSection);

  useEffect(() => {
    registerSection("projects", ref);
  }, [registerSection]);

  return (
    <Stack align="center" ref={ref} className="whiteText" mt={"10vh"} mb={"10vh"}>
      <SimpleGrid cols={4} visibleFrom="sm">
        <BoxProjects />
      </SimpleGrid>

      <Stack gap={50} hiddenFrom="sm">
        <BoxProjects />
      </Stack>
    </Stack>
  );
}

function BoxProjects() {
  return (
    <>
      <BoxProject
        title="Data Monitoring & Analytics"
        activities={[
          { title: "Web scraping and data collection", icon: <IconSearch size={80} /> },
          { title: "Real-time data tracking", icon: <IconFileSearch size={80} /> },
          { title: "Advanced analytics dashboard", icon: <IconDatabase size={80} /> },
          { title: "Alert system for data anomalies", icon: <IconBell size={80} /> },
        ]}
      />

      <BoxProject
        link="https://assetportfolio-gmfmfydkhkfwebgg.westeurope-01.azurewebsites.net"
        title="Portfolio & Asset Management"
        activities={[
          { title: "Portfolio Analysis", icon: <IconChartPie size={80} /> },
          { title: "Analytics for market trends", icon: <IconChartBar size={80} /> },
          { title: "Interactive chart asset and performance", icon: <IconTrendingUp size={80} /> },
        ]}
      />

      <BoxProject
        title="E-Invoicing Solution"
        activities={[
          { title: "Electronic tracking and invoice", icon: <IconFileImport size={80} /> },
          { title: "Company and client management", icon: <IconSettings size={80} /> },
          { title: "Interactive chart asset and performance", icon: <IconLock size={80} /> },
        ]}
      />

      <BoxProject
        title="Web3 Fantasy Football Platform"
        activities={[
          { title: "Automatically manage user funds", icon: <IconSettings size={80} /> },
          { title: "Smart Contracts", icon: <IconDatabase size={80} /> },
          { title: "Live Actions", icon: <IconTrendingUp size={80} /> },
        ]}
      />
    </>
  );
}

function BoxProject({ title, activities }: { title: string; activities: IconActivityProps[]; link?: string }) {
  return (
    <CustomAnimationShow>
      <Box p={20}>
        <Stack>
          <Title ta={"center"} fz={45} className="whiteText" mb={20} mih={120}>
            {title}
          </Title>
        </Stack>

        <Stack mt={40}>
          {activities.map((activity, index) => (
            <IconActivity key={index} {...activity} />
          ))}
        </Stack>
        {/* <Center>{link && <PrimaryButton onClick={() => window.open(link, "_blank")}>View Project</PrimaryButton>}</Center> */}
      </Box>
    </CustomAnimationShow>
  );
}

type IconActivityProps = {
  title: string;
  icon: React.ReactNode;
};

function IconActivity({ title, icon }: IconActivityProps) {
  return (
    <Group justify="center">
      {icon}
      <Text ta={"center"} maw={150} ml={10} className="whiteText" fz={20} fw={700}>
        {title}
      </Text>
    </Group>
  );
}
