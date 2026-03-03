import { Badge, Box, Center, Divider, Group, List, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBell,
  IconBrain,
  IconCoin,
  IconDatabase,
  IconFileImport,
  IconFileSearch,
  IconLayoutDashboard,
  IconLock,
  IconSearch,
  IconSettings,
  IconSparkles,
  IconTrendingUp,
  IconWorld,
} from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import CustomAnimationShow from "../components/Animations/CustomAnimationShow";
import CustomModal from "../components/CustomModal";
import CustomTooltip from "../components/CustomTooltip";
import PrimaryButton from "../components/PrimaryButton";
import { useScrollStore } from "../store/scrollStore";

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const registerSection = useScrollStore((s) => s.registerSection);
  const [opened, { open, close }] = useDisclosure(false);
  const [activeDetails, setActiveDetails] = useState<{ title: string; details: ProjectDetails } | null>(null);

  function handleOpenDetails(title: string, details: ProjectDetails) {
    setActiveDetails({ title, details });
    open();
  }

  useEffect(() => {
    registerSection("projects", ref);
  }, [registerSection]);

  return (
    <Stack align="center" ref={ref} className="whiteText" mt={"10vh"} mb={"10vh"} px={16}>
      <Stack align="center" gap={8} mb={30}>
        <Title order={2} ta="center" fz={{ base: 34, sm: 50 }}>
          Selected Projects
        </Title>
        <Text ta="center" maw={760} c="rgba(255,255,255,0.6)" fz={{ base: 14, sm: 17 }}>
          Full-stack solutions focused on automation, analytics and scalable digital products.
        </Text>
      </Stack>

      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 4 }}
        spacing={{ base: 24, sm: 30 }}
        verticalSpacing={{ base: 24, sm: 30 }}
      >
        <BoxProjects onDetails={handleOpenDetails} />
      </SimpleGrid>

      {opened && activeDetails && (
        <CustomModal onClose={close} title={activeDetails.title} size="xl">
          <ModalContent details={activeDetails.details} />
        </CustomModal>
      )}
    </Stack>
  );
}

type ProjectDetails = {
  description: string;
  features: string[];
  techStack: { category: string; items: string[] }[];
  integrations: string[];
  link?: string;
};

function BoxProjects({ onDetails }: { onDetails: (title: string, details: ProjectDetails) => void }) {
  return (
    <>
      <BoxProject
        title="Data Monitoring & Analytics"
        subtitle="Real-time data pipeline and operational monitoring"
        activities={[
          {
            title: "Web scraping and data collection",
            icon: <IconSearch size={44} />,
            tooltip: "Automated data collection from multiple sources",
          },
          {
            title: "Real-time data tracking",
            icon: <IconFileSearch size={44} />,
            tooltip: "Continuous monitoring of relevant events and streams",
          },
          {
            title: "Advanced analytics dashboard",
            icon: <IconDatabase size={44} />,
            tooltip: "KPIs and trends in interactive dashboards",
          },
          {
            title: "Alert system for data anomalies",
            icon: <IconBell size={44} />,
            tooltip: "Instant notifications on anomalies and thresholds",
          },
        ]}
      />

      <BoxProject
        title="MyMonitorly"
        subtitle="SaaS portfolio intelligence for retail investors"
        activities={[
          {
            title: "Multi-asset tracking (crypto, stocks, ETF, bonds)",
            icon: <IconCoin size={44} />,
            tooltip: "Unified portfolio view across traditional and crypto assets",
          },
          {
            title: "AI-powered weekly report",
            icon: <IconBrain size={44} />,
            tooltip: "Personalised reports with automated insights",
          },
          {
            title: "Real-time alerts via Telegram",
            icon: <IconBell size={44} />,
            tooltip: "Technical, price and time-based alerts in real time",
          },
          {
            title: "On-chain Bitcoin & macro analysis",
            icon: <IconWorld size={44} />,
            tooltip: "On-chain metrics and global macro context",
          },
          {
            title: "Advanced responsive dashboard",
            icon: <IconLayoutDashboard size={44} />,
            tooltip: "Mobile-first UX with advanced portfolio visualisations",
          },
        ]}
        details={{
          description:
            "MyMonitorly is a SaaS web app for retail investors who want to track, analyse and receive alerts on hybrid portfolios (crypto, stocks, ETFs, bonds) in one place. The key differentiator from competitors (CoinStats, Delta, Personal Capital) is the integration of institutional-grade metrics, Bitcoin on-chain analysis and personalised AI reports.",
          features: [
            "Unified multi-asset portfolio (crypto, stocks, ETFs, bonds)",
            "Weekly AI reports personalised for Premium users",
            "Real-time alerts (price, technical, time-based) via Telegram",
            "Bitcoin on-chain analytics and global macro metrics",
            "Responsive dashboard with advanced portfolio visualisations",
            "Mobile-first responsive design",
          ],
          techStack: [
            {
              category: "Backend",
              items: [
                "ASP.NET Core",
                "Repository + Unit of Work",
                "ASP.NET Identity + JWT",
                "SignalR",
                "Stripe",
                "AWS SES",
                "18 hosted background services",
              ],
            },
            {
              category: "Frontend App",
              items: ["React + TypeScript + Vite", "Zustand + React Query", "react-i18next (IT + EN)"],
            },
            {
              category: "Landing Page",
              items: ["Next.js (SEO / SSG)"],
            },
          ],
          integrations: [
            "CoinGecko, CoinMarketCap, Zerion, Dune Analytics",
            "EODHD, FMP, Finnhub",
            "OpenRouter (Claude / GPT)",
            "Telegram Bot, AWS SES",
            "Stripe",
            "NewsAPI, Google Search Console",
          ],
          link: "https://mymonitorly.com/it",
        }}
        onDetails={onDetails}
      />

      <BoxProject
        title="E-Invoicing Solution"
        subtitle="Digitised invoicing cycle management for businesses"
        activities={[
          {
            title: "Electronic tracking and invoice",
            icon: <IconFileImport size={44} />,
            tooltip: "Structured and auditable document workflows",
          },
          {
            title: "Company and client management",
            icon: <IconSettings size={44} />,
            tooltip: "Centralised registries and business process management",
          },
          {
            title: "Secure document access",
            icon: <IconLock size={44} />,
            tooltip: "Secure access and full document traceability",
          },
        ]}
      />

      <BoxProject
        title="Web3 Fantasy Football Platform"
        subtitle="Decentralised fantasy experience with on-chain logic"
        activities={[
          {
            title: "Automatically manage user funds",
            icon: <IconSettings size={44} />,
            tooltip: "Automated management of user-side operations",
          },
          {
            title: "Smart Contracts",
            icon: <IconDatabase size={44} />,
            tooltip: "Rules and transactions enforced by smart contracts",
          },
          {
            title: "Live Actions",
            icon: <IconTrendingUp size={44} />,
            tooltip: "Live events and dynamic updates across the platform",
          },
        ]}
      />
    </>
  );
}

function ModalContent({ details }: { details: ProjectDetails }) {
  return (
    <Stack gap="md">
      <Text c="rgba(255,255,255,0.8)" fz={15}>
        {details.description}
      </Text>

      <Divider />

      <Title order={4} c="site.2">
        Key Features
      </Title>
      <List spacing="xs">
        {details.features.map((f, i) => (
          <List.Item key={i}>
            <Text fz={14} c="rgba(255,255,255,0.85)">
              {f}
            </Text>
          </List.Item>
        ))}
      </List>

      <Divider />

      <Title order={4} c="site.2">
        Tech Stack
      </Title>
      <Stack gap="xs">
        {details.techStack.map((layer, i) => (
          <Box key={i}>
            <Text fw={700} fz={14} mb={4} c="rgba(255,255,255,0.9)">
              {layer.category}
            </Text>
            <Group gap={6} wrap="wrap">
              {layer.items.map((item, j) => (
                <Badge key={j} variant="light" color="blue" size="sm">
                  {item}
                </Badge>
              ))}
            </Group>
          </Box>
        ))}
      </Stack>

      <Divider />

      <Title order={4} c="site.2">
        External Integrations
      </Title>
      <Group gap={6} wrap="wrap">
        {details.integrations.map((int, i) => (
          <Badge key={i} variant="light" color="teal" size="sm">
            {int}
          </Badge>
        ))}
      </Group>

      {details.link && (
        <>
          <Divider />
          <Center>
            <PrimaryButton onClick={() => window.open(details.link, "_blank")}>Live Project</PrimaryButton>
          </Center>
        </>
      )}
    </Stack>
  );
}

function BoxProject({
  title,
  subtitle,
  activities,
  details,
  onDetails,
}: {
  title: string;
  subtitle: string;
  activities: IconActivityProps[];
  details?: ProjectDetails;
  link?: string;
  onDetails?: (title: string, details: ProjectDetails) => void;
}) {
  return (
    <CustomAnimationShow style={{ height: "100%" }}>
      <Box
        p={24}
        h="100%"
        style={{
          borderRadius: 18,
          border: "1px solid rgba(153, 69, 255, 0.2)",
          background: "rgba(255, 255, 255, 0.02)",
          backdropFilter: "blur(4px)",
          transition: "border-color 200ms ease, background 200ms ease",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* header */}
        <Stack gap={6} mb={20}>
          <Title ta="center" fz={{ base: 28, sm: 34 }} className="whiteText" lh={1.15}>
            {title}
          </Title>
          <Text ta="center" c="rgba(255,255,255,0.55)" fz={14} lh={1.4}>
            {subtitle}
          </Text>
        </Stack>

        {/* features list — grows to fill available space */}
        <Stack gap={12} style={{ flex: 1 }}>
          {activities.map((activity, index) => (
            <IconActivity key={index} {...activity} />
          ))}
        </Stack>

        {/* CTA */}
        {details && onDetails && (
          <Center mt={24}>
            <PrimaryButton
              leftSection={<IconSparkles size={16} />}
              miw={155}
              mih={48}
              onClick={() => onDetails(title, details)}
            >
              View Details
            </PrimaryButton>
          </Center>
        )}
      </Box>
    </CustomAnimationShow>
  );
}

type IconActivityProps = {
  title: string;
  icon: React.ReactNode;
  tooltip?: string;
};

function IconActivity({ title, icon, tooltip }: IconActivityProps) {
  return (
    <Group justify="center" wrap="nowrap" gap={12} align="center">
      <CustomTooltip label={tooltip ?? title}>
        <Box style={{ color: "var(--mantine-color-site-2)", opacity: 0.92 }}>{icon}</Box>
      </CustomTooltip>
      <Text ta={"left"} maw={220} className="whiteText" fz={{ base: 15, sm: 16 }} fw={700} lh={1.3}>
        {title}
      </Text>
    </Group>
  );
}
