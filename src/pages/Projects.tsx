import { Flex, List, Stack, Text, Title } from "@mantine/core";
import { useEffect, useRef } from "react";
import img1 from "../assets/assetportfolio.png";
import img2 from "../assets/fanta-web3.png";
import { useScrollStore } from "../store/scrollStore";

const projects: ProjectProps[] = [
  {
    title: "Web3 Fantasy Football Platform",
    bulletPoints: [
      "Developed a decentralized fantasy football application where users can join leagues, manage teams, and compete for prizes.",
      "Implemented smart contracts with Hardhat to securely handle entry fees and automatically distribute rewards to winners.",
      "Designed an on-chain auction system for player transfers, ensuring transparent and verifiable transactions.",
      "Integrated Web3 Authentication for wallet-based login and secure access control.",
      "Used Prisma with MongoDB for efficient data management and scalability.",
      "Implemented real-time updates during matches and auctions using Pusher.io.",
      "Leveraged Zustand for performant state management and smooth user experience.",
    ],
    img: img2,
  },
  {
    title: "Personal Investment Dashboard",
    bulletPoints: [
      "Built a full-stack platform for portfolio and asset management with real-time profit tracking.",
      "Implemented analytics to monitor market trends and suggest optimal buy/sell timing based on user-defined rules.",
      "Created interactive charts to visualize asset performance and diversification.",
      "Integrated .NET APIs for high-frequency data handling and seamless updates.",
      "Designed a clean, responsive UI to simplify investment tracking and decision-making.",
      "Added modules for transaction history, profit reports, and asset categorization.",
    ],
    img: img1,
  },
  {
    title: "Electronic Invoicing Management System",
    bulletPoints: [
      "Developed an end-to-end software for electronic invoice creation, validation, and transmission to the San Marino tax authorities.",
      "Implemented company and client management with secure data storage and access control.",
      "Automated XML generation and signature processes for compliant e-invoicing.",
      "Integrated audit logging and status tracking for complete workflow transparency.",
      "Designed an intuitive interface for accountants and small business owners.",
    ],
    // img: img3, // aggiungi qui un'immagine per il progetto fatturazione
  },
  {
    title: "E-commerce Scraping & Analytics Tool",
    bulletPoints: [
      "Developed a web scraping system to collect and monitor product data across multiple e-commerce platforms.",
      "Stored and structured data in MongoDB for efficient querying and analysis.",
      "Built dynamic dashboards to visualize trends, price variations, and competitor performance.",
      "Added alert systems for price changes, new listings, and market anomalies.",
    ],
    // img: img4, // immagine per lo scraper
  },
  {
    title: "Delivery Note Analysis & Automation System",
    bulletPoints: [
      "Intelligent system to process and analyze delivery notes and quotes using OCR and AI.",
      "Automating data extraction from PDF and scanned documents for integration into internal management systems.",
      "Designing logic to classify, validate, and reconcile data across suppliers and departments.",
      "Building a dashboard to review extracted information and generate structured reports.",
    ],
    // img: img5, // immagine per il progetto OCR
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const registerSection = useScrollStore((s) => s.registerSection);

  useEffect(() => {
    registerSection("projects", ref);
  }, [registerSection]);

  return (
    <Stack align="center" ref={ref} h={"100vh"}>
      <Stack p={20} align="center">
        <Title size={40} className="whiteText" order={3} ta={"center"}>
          PROJECTS
        </Title>
      </Stack>

      <Stack gap={50}>
        {projects.map((job, i) => (
          <Project key={i} {...job} />
        ))}
      </Stack>
    </Stack>
  );
}

type ProjectProps = {
  title: string;
  bulletPoints: string[];
  img?: string;
};

function Project({ title, bulletPoints }: ProjectProps) {
  return (
    <Stack className="whiteText" align="center">
      <Stack w={900} justify="center">
        <Flex direction={"column"}>
          <Title ta={"center"} order={3}>
            {title}
          </Title>
        </Flex>

        <List>
          {bulletPoints.map((ele, i) => (
            <List.Item key={i}>
              <Text>{ele}</Text>
            </List.Item>
          ))}
        </List>
      </Stack>

      {/* <Image src={img} alt="projects" maw={800} h={"100%"} /> */}
    </Stack>
  );
}
