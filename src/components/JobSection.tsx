import { Container, Flex, Title, Text, List } from "@mantine/core";
import { getDateString } from "../utils/DateUtils";

export type JobSectionProps = {
    title: string;
    subtitle: string;
    bulletPoints: string[];
    dateStart: string;
    dateEnd?: string;
};

export default function JobSection(props: JobSectionProps) {
    return (
        <Container w={"100%"} p={10} className="whiteText">
            <Flex justify={"space-between"} mb={10}>
                <Flex direction={"column"}>
                    <Title order={3}>{props.title}</Title>
                    <Title order={4}>{props.subtitle}</Title>
                </Flex>
                <Flex p={20}>
                    <Text>{getDateString(props.dateStart)}</Text>
                    {props.dateEnd ? <Text> - {getDateString(props.dateEnd)} </Text> : <Text> - Current</Text>}
                </Flex>
            </Flex>

            <List>
                {props.bulletPoints.map((ele, i) => (
                    <List.Item key={i}>
                        <Text>{ele}</Text>
                    </List.Item>
                ))}
            </List>
        </Container>
    );
}
