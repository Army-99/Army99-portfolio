import { Stack } from "@mantine/core";
import { useEffect, useRef } from "react";
import CustomAnimationShow from "../components/Animations/CustomAnimationShow";
import JobSection, { JobSectionProps } from "../components/JobSection";
import { useScrollStore } from "../store/scrollStore";

const jobs: JobSectionProps[] = [
  {
    title: "MyMonitorly",
    subtitle: "Personal Project",
    bulletPoints: [
      "Built a full-stack SaaS platform for retail investors to track hybrid portfolios (crypto, stocks, ETFs, bonds) in a single unified dashboard, differentiating from competitors with institutional-grade on-chain metrics and personalised AI reports.",
      "Engineered 18 dedicated background hosted services covering real-time price ingestion, technical indicators, Bitcoin on-chain analytics, AI report generation, alert evaluation, and third-party API synchronisation.",
      "Implemented real-time price, technical and time-based alerts delivered via SignalR WebSocket and Telegram Bot, with Stripe subscription handling and AWS SES email delivery.",
      "Integrated multiple external data sources: CoinGecko, CoinMarketCap, Zerion, Dune Analytics, EODHD, FMP, Finnhub, OpenRouter (Claude/GPT), NewsAPI and Google Search Console.",
      "Delivered a mobile-first React + TypeScript frontend (Zustand, React Query, react-i18next IT/EN) backed by an ASP.NET Core API following Repository + Unit of Work architecture with JWT authentication.",
    ],
    dateStart: "2025",
  },

  {
    title: "Full-Stack Developer",
    subtitle: "Abstraqt S.r.l.",
    bulletPoints: [
      "Contributed to application redevelopment as a full-stack developer, utilizing React (Typescript) for frontend and .NET for backend.",
      "Adopted Entity Framework and Docker for scalability, showcasing full-stack expertise.",
      "Collaborated in modernizing legacy Java applications and MVC frameworks, achieving a notable speed increase.",
    ],
    dateStart: "2023",
  },
  {
    title: "Autonomous Web3 Gaming Application",
    subtitle: "Personal Project",
    bulletPoints: [
      "Architected a fantasy football game using Next.js for both frontend and backend, leveraging Web3 smart contracts to manage user funds and enable autonomous play-and-earn mechanics.",
      "Created and deployed smart contracts using Hardhat, handling fund custody and reward distribution entirely on-chain without manual intervention.",
      "Integrated Web3 authentication to replace traditional login flows, enhancing security and simplifying the user onboarding experience.",
      "Employed Prisma ORM for structured database management and MongoDB Atlas for scalable, cloud-hosted data storage.",
      "Integrated Pusher.io for real-time bidding events during soccer player auctions, ensuring a low-latency interactive experience.",
      "Leveraged Zustand for global state management, optimising performance and keeping UI interactions fast and predictable.",
    ],
    dateStart: "2022",
    dateEnd: "2023",
  },
  {
    title: "Software Engineer",
    subtitle: "Wonderfood S.p.a.",
    bulletPoints: [
      "Developed an electronic invoicing program using C# and TSQL, improving financial operations",
      "Created and optimized over 25 applications in QlikView and Qlik Sense, streamlining data analysis and delivery processes.",
      "Introduced Python-based data scraping applications and automation, accelerating sales control processes. ",
    ],
    dateStart: "2021",
    dateEnd: "2023",
  },
  {
    title: "Technical ICT",
    subtitle: "Costim S.r.l",
    bulletPoints: [
      "Enhanced warehouse operations through the implementation of C#, PowerShell, and Azure Shell solutions.",
      "Upgraded security measures, including robust protocols and regular vulnerability assessments, ",
      "Implemented user-friendly interfaces",
    ],
    dateStart: "2019",
    dateEnd: "2021",
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const registerSection = useScrollStore((s) => s.registerSection);

  useEffect(() => {
    registerSection("experience", ref);
  }, [registerSection]);

  return (
    <>
      <div ref={ref} />
      <Stack mt={"10vh"} mb={50} justify="center">
        <Stack gap={50}>
          {jobs.map((job, i) => (
            <CustomAnimationShow key={i} delay={i * 0.3}>
              <JobSection {...job} />
            </CustomAnimationShow>
          ))}
        </Stack>
      </Stack>
    </>
  );
}
