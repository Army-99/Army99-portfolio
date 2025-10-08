import { Box, Space, Stack, Title } from "@mantine/core";
import { useEffect, useRef } from "react";
import JobSection, { JobSectionProps } from "../components/JobSection";
import { useScrollStore } from "../store/scrollStore";

const jobs: JobSectionProps[] = [
  {
    title: "Full-Stack Developer",
    subtitle: "Abstraqt S.r.l.",
    bulletPoints: [
      "Contributed to application redevelopment as a full-stack developer, utilizing React (Typescript) for frontend and .NET for backend.",
      "Adopted Entity Framework and Docker for scalability, showcasing full-stack expertise.",
      "Collaborated in modernizing legacy Java applications and MVC frameworks, achieving a notable speed increase.",
    ],
    dateStart: "20/02/2023",
  },
  {
    title: "Software Engineer",
    subtitle: "Wonderfood S.p.a.",
    bulletPoints: [
      "Developed an electronic invoicing program using C# and TSQL, improving financial operations",
      "Created and optimized over 25 applications in QlikView and Qlik Sense, streamlining data analysis and delivery processes.",
      "Introduced Python-based data scraping applications and automation, accelerating sales control processes. ",
    ],
    dateStart: "01/05/2021",
    dateEnd: "19/02/2023",
  },
  {
    title: "Technical ICT",
    subtitle: "Costim S.r.l",
    bulletPoints: [
      "Enhanced warehouse operations through the implementation of C#, PowerShell, and Azure Shell solutions.",
      "Upgraded security measures, including robust protocols and regular vulnerability assessments, ",
      "Implemented user-friendly interfaces",
    ],
    dateStart: "11/11/2021",
    dateEnd: "30/04/2021",
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const registerSection = useScrollStore((s) => s.registerSection);

  useEffect(() => {
    registerSection("experience", ref);
  }, [registerSection]);

  return (
    <Stack h={"100vh"} justify="center" ref={ref}>
      <Stack p={20} align="center">
        <Space h={50} />

        <Title size={40} className="whiteText" order={3} ta={"center"}>
          EXPERIENCE
        </Title>

        {jobs.map((job, i) => (
          <Box miw={1000}>
            <JobSection key={i} {...job} />
          </Box>
        ))}
      </Stack>
    </Stack>
  );
}
