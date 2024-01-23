import { Container, Stack, Title } from "@mantine/core";
import JobSection, { JobSectionProps } from "../components/JobSection";
import CustomCard from "../components/CustomCard";

const projects: JobSectionProps[] = [
    {
        title: "Web3 Gaming Application (Beta Test)",
        subtitle: "Autonomous",
        bulletPoints: [
            "Created and deployed smart contracts using Hardhat to manage user funds, enabling users to play and earn autonomously.",
            "Integrated Web3 Authentication to enhance security and user authentication within the application.",
            "Employed Prisma for efficient database management and MongoDB for scalable data storage.",
            "Integrated Pusher.io for real-time communication, ensuring an interactive gaming environment.",
            "Leveraged Zustand for state management, optimizing performance and user interactions.",
        ],
        dateStart: "15/10/2023",
    },
];

export default function Projects() {
    return (
        <Stack p={20}>
            <Container>
                <Title className="whiteText" ta={"center"} order={2} mb={15}>
                    PROJECTS
                </Title>
                {projects.map((project, i) => (
                    <CustomCard>
                        <JobSection key={i} {...project} />
                    </CustomCard>
                ))}
            </Container>
        </Stack>
    );
}
