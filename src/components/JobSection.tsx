import { Flex, Grid, List, Stack, Text, Title } from "@mantine/core";
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
    <Grid className="whiteText">
      <Grid.Col span={3}>
        <Flex p={20}>
          <Text ta={"right"}>{getDateString(props.dateStart)}</Text>
          {props.dateEnd ? <Text> - {getDateString(props.dateEnd)} </Text> : <Text> - Current</Text>}
        </Flex>
      </Grid.Col>

      <Grid.Col span={9}>
        <Stack>
          <Flex justify={"space-between"} mb={10}>
            <Flex direction={"column"}>
              <Title fz={40}>{props.title}</Title>
              <Title order={4}>{props.subtitle}</Title>
            </Flex>
          </Flex>

          <List>
            {props.bulletPoints.map((ele, i) => (
              <List.Item key={i}>
                <Text>{ele}</Text>
              </List.Item>
            ))}
          </List>
        </Stack>
      </Grid.Col>
    </Grid>
  );
}
