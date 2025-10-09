import { Box, Grid, Group, Stack, Text, Title } from "@mantine/core";
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
import { useScrollStore } from "../store/scrollStore";

// const projects: ProjectProps[] = [
//   {
//     title: "Web3 Fantasy Football Platform",
//     bulletPoints: [
//       "Developed a decentralized fantasy football application where users can join leagues, manage teams, and compete for prizes.",
//       "Implemented smart contracts with Hardhat to securely handle entry fees and automatically distribute rewards to winners.",
//       "Designed an on-chain auction system for player transfers, ensuring transparent and verifiable transactions.",
//       "Integrated Web3 Authentication for wallet-based login and secure access control.",
//       "Used Prisma with MongoDB for efficient data management and scalability.",
//       "Implemented real-time updates during matches and auctions using Pusher.io.",
//       "Leveraged Zustand for performant state management and smooth user experience.",
//     ],
//     img: img2,
//   },
//   {
//     title: "Personal Investment Dashboard",
//     bulletPoints: [
//       "Built a full-stack platform for portfolio and asset management with real-time profit tracking.",
//       "Implemented analytics to monitor market trends and suggest optimal buy/sell timing based on user-defined rules.",
//       "Created interactive charts to visualize asset performance and diversification.",
//       "Integrated .NET APIs for high-frequency data handling and seamless updates.",
//       "Designed a clean, responsive UI to simplify investment tracking and decision-making.",
//       "Added modules for transaction history, profit reports, and asset categorization.",
//     ],
//     img: img1,
//   },
//   {
//     title: "Electronic Invoicing Management System",
//     bulletPoints: [
//       "Developed an end-to-end software for electronic invoice creation, validation, and transmission to the San Marino tax authorities.",
//       "Implemented company and client management with secure data storage and access control.",
//       "Automated XML generation and signature processes for compliant e-invoicing.",
//       "Integrated audit logging and status tracking for complete workflow transparency.",
//       "Designed an intuitive interface for accountants and small business owners.",
//     ],
//     // img: img3, // aggiungi qui un'immagine per il progetto fatturazione
//   },
//   {
//     title: "E-commerce Scraping & Analytics Tool",
//     bulletPoints: [
//       "Developed a web scraping system to collect and monitor product data across multiple e-commerce platforms.",
//       "Stored and structured data in MongoDB for efficient querying and analysis.",
//       "Built dynamic dashboards to visualize trends, price variations, and competitor performance.",
//       "Added alert systems for price changes, new listings, and market anomalies.",
//     ],
//     // img: img4, // immagine per lo scraper
//   },
//   {
//     title: "Delivery Note Analysis & Automation System",
//     bulletPoints: [
//       "Intelligent system to process and analyze delivery notes and quotes using OCR and AI.",
//       "Automating data extraction from PDF and scanned documents for integration into internal management systems.",
//       "Designing logic to classify, validate, and reconcile data across suppliers and departments.",
//       "Building a dashboard to review extracted information and generate structured reports.",
//     ],
//     // img: img5, // immagine per il progetto OCR
//   },
// ];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const registerSection = useScrollStore((s) => s.registerSection);

  useEffect(() => {
    registerSection("projects", ref);
  }, [registerSection]);

  return (
    <Stack align="center" ref={ref} className="whiteText" mt={"10vh"} mb={"10vh"}>
      <Grid gutter={"xl"} grow>
        <Grid.Col span={12}>
          <BoxProject
            title="Data Monitoring & Analytics"
            activities={[
              { title: "Web scraping and data collection", icon: <IconSearch size={80} /> },
              { title: "Real-time data tracking", icon: <IconFileSearch size={80} /> },
              { title: "Advanced analytics dashboard", icon: <IconDatabase size={80} /> },
              { title: "Alert system for data anomalies", icon: <IconBell size={80} /> },
            ]}
          />
        </Grid.Col>

        <Grid.Col span={6}>
          <BoxProject
            title="Portfolio & Asset Management"
            activities={[
              { title: "Portfolio Analysis", icon: <IconChartPie size={80} /> },
              { title: "Analytics for market trends", icon: <IconChartBar size={80} /> },
              { title: "Interactive chart asset and performance", icon: <IconTrendingUp size={80} /> },
            ]}
          />
        </Grid.Col>

        <Grid.Col span={6}>
          <BoxProject
            title="E-Invoicing Solution"
            activities={[
              { title: "Electronic tracking and invoice", icon: <IconFileImport size={80} /> },
              { title: "Company and client management", icon: <IconSettings size={80} /> },
              { title: "Interactive chart asset and performance", icon: <IconLock size={80} /> },
            ]}
          />
        </Grid.Col>

        <Grid.Col span={12}>
          <BoxProject
            title="Web3 Fantasy Football Platform"
            activities={[
              { title: "Automatically manage user funds", icon: <IconSettings size={80} /> },
              { title: "Smart Contracts", icon: <IconDatabase size={80} /> },
              { title: "Live Actions", icon: <IconTrendingUp size={80} /> },
            ]}
          />
        </Grid.Col>
      </Grid>

      {/* <Stack gap={50}>
        {projects.map((job, i) => (
          <Project key={i} {...job} position={i % 2 === 0 ? "left" : "right"} />
        ))}
      </Stack> */}
    </Stack>
  );
}

// type ProjectProps = {
//   title: string;
//   bulletPoints: string[];
//   img?: string;
//   position?: "left" | "right";
// };

// function Project({ title, bulletPoints, img, position = "right" }: ProjectProps) {
//   return (
//     <>
//       <Group>
//         {position === "left" && <Image src={img} maw={800} h={"100%"} />}
//         <Stack className="whiteText" align="center">
//           <Title ta={"center"} order={3}>
//             {title}
//           </Title>

//           <List>
//             {bulletPoints.map((ele, i) => (
//               <List.Item key={i}>
//                 <Text>{ele}</Text>
//               </List.Item>
//             ))}
//           </List>
//         </Stack>
//         {position === "right" && <Image src={img} maw={800} h={"100%"} />}
//       </Group>
//     </>
//   );
// }

function BoxProject({ title, activities }: { title?: string; activities: IconActivityProps[] }) {
  return (
    <Box p={20}>
      <Title ta={"center"} fz={35} className="whiteText" mb={20}>
        {title ?? "Project Title"}
      </Title>
      <Group justify="center" align="start" gap={30}>
        {activities.map((activity, index) => (
          <IconActivity key={index} {...activity} />
        ))}
      </Group>
    </Box>
  );
}

type IconActivityProps = {
  title: string;
  icon: React.ReactNode;
};

function IconActivity({ title, icon }: IconActivityProps) {
  return (
    <Stack align="center">
      {icon}
      <Text ta={"center"} maw={150} ml={10} className="whiteText" fz={20} fw={700}>
        {title}
      </Text>
    </Stack>
  );
}
