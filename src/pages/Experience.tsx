import { Stack } from "@mantine/core";
import { useEffect, useRef } from "react";
import CustomAnimationShow from "../components/Animations/CustomAnimationShow";
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
    dateStart: "2023",
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
