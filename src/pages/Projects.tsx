import { Box, Center, Group, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBell,
  IconBrain,
  IconCheck,
  IconCoin,
  IconCode,
  IconDatabase,
  IconExternalLink,
  IconFileImport,
  IconFileSearch,
  IconLayoutDashboard,
  IconLock,
  IconPlug,
  IconSearch,
  IconSettings,
  IconSparkles,
  IconStack2,
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
                "Hosted background services",
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
            "CoinGecko",
            "CoinMarketCap",
            "Zerion",
            "Dune Analytics",
            "EODHD",
            "OpenRouter",
            "Telegram Bot",
            "AWS SES",
            "Stripe",
            "NewsAPI",
            "Google Search Console",
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

const LAYER_COLORS: Record<string, { bg: string; border: string; label: string }> = {
  Backend: { bg: "rgba(99,102,241,0.12)", border: "rgba(99,102,241,0.35)", label: "#818cf8" },
  "Frontend App": { bg: "rgba(34,211,238,0.08)", border: "rgba(34,211,238,0.3)", label: "#67e8f9" },
  "Landing Page": { bg: "rgba(52,211,153,0.08)", border: "rgba(52,211,153,0.3)", label: "#6ee7b7" },
};

function SectionLabel({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <Group gap={8} mb={12}>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 30,
          height: 30,
          borderRadius: 8,
          background: "rgba(153,69,255,0.15)",
          border: "1px solid rgba(153,69,255,0.3)",
          color: "#c4b5fd",
          flexShrink: 0,
        }}
      >
        {icon}
      </Box>
      <Text
        fw={700}
        fz={13}
        style={{ letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(196,181,253,0.8)" }}
      >
        {label}
      </Text>
    </Group>
  );
}

function ModalContent({ details }: { details: ProjectDetails }) {
  return (
    <Stack gap={28}>
      {/* ── Description ── */}
      <Box
        p={16}
        style={{
          borderRadius: 12,
          borderLeft: "3px solid rgba(153,69,255,0.6)",
          background: "rgba(153,69,255,0.06)",
        }}
      >
        <Text c="rgba(255,255,255,0.75)" fz={14} lh={1.7}>
          {details.description}
        </Text>
      </Box>

      {/* ── Features ── */}
      <Box>
        <SectionLabel icon={<IconSparkles size={15} />} label="Key Features" />
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={8}>
          {details.features.map((f, i) => (
            <Group
              key={i}
              gap={10}
              wrap="nowrap"
              p={10}
              style={{
                borderRadius: 10,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                alignItems: "flex-start",
              }}
            >
              <Box
                mt={2}
                style={{
                  flexShrink: 0,
                  width: 18,
                  height: 18,
                  borderRadius: 5,
                  background: "rgba(52,211,153,0.15)",
                  border: "1px solid rgba(52,211,153,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#6ee7b7",
                }}
              >
                <IconCheck size={11} stroke={2.5} />
              </Box>
              <Text fz={13} c="rgba(255,255,255,0.82)" lh={1.45}>
                {f}
              </Text>
            </Group>
          ))}
        </SimpleGrid>
      </Box>

      {/* ── Tech Stack ── */}
      <Box>
        <SectionLabel icon={<IconStack2 size={15} />} label="Tech Stack" />
        <Stack gap={10}>
          {details.techStack.map((layer, i) => {
            const colors = LAYER_COLORS[layer.category] ?? {
              bg: "rgba(255,255,255,0.04)",
              border: "rgba(255,255,255,0.12)",
              label: "rgba(255,255,255,0.6)",
            };
            return (
              <Box
                key={i}
                p={14}
                style={{
                  borderRadius: 12,
                  background: colors.bg,
                  border: `1px solid ${colors.border}`,
                }}
              >
                <Group gap={6} mb={10} align="center">
                  <IconCode size={13} color={colors.label} />
                  <Text
                    fw={700}
                    fz={12}
                    style={{ letterSpacing: "0.06em", textTransform: "uppercase", color: colors.label }}
                  >
                    {layer.category}
                  </Text>
                </Group>
                <Group gap={6} wrap="wrap">
                  {layer.items.map((item, j) => (
                    <Box
                      key={j}
                      px={10}
                      py={4}
                      style={{
                        borderRadius: 6,
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        fontSize: 12,
                        fontWeight: 600,
                        color: "rgba(255,255,255,0.85)",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {item}
                    </Box>
                  ))}
                </Group>
              </Box>
            );
          })}
        </Stack>
      </Box>

      {/* ── Integrations ── */}
      <Box>
        <SectionLabel icon={<IconPlug size={15} />} label="External Integrations" />
        <Group gap={7} wrap="wrap">
          {details.integrations.map((int, i) => (
            <Box
              key={i}
              px={10}
              py={5}
              style={{
                borderRadius: 20,
                background: "rgba(20,184,166,0.1)",
                border: "1px solid rgba(20,184,166,0.28)",
                fontSize: 12,
                fontWeight: 600,
                color: "#5eead4",
                letterSpacing: "0.03em",
              }}
            >
              {int}
            </Box>
          ))}
        </Group>
      </Box>

      {/* ── CTA ── */}
      {details.link && (
        <Box
          p={20}
          style={{
            borderRadius: 14,
            background: "linear-gradient(135deg, rgba(85,22,220,0.18) 0%, rgba(153,69,255,0.12) 100%)",
            border: "1px solid rgba(153,69,255,0.25)",
            textAlign: "center",
          }}
        >
          <Text fz={13} c="rgba(255,255,255,0.55)" mb={14}>
            Ready to explore the live platform?
          </Text>
          <Center>
            <PrimaryButton
              leftSection={<IconExternalLink size={16} />}
              miw={180}
              mih={46}
              onClick={() => window.open(details.link, "_blank")}
            >
              View Live Project
            </PrimaryButton>
          </Center>
        </Box>
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
