import { Divider, Flex, Grid, Group, List, Stack, Text, Title } from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";

export type JobSectionProps = {
  title: string;
  subtitle: string;
  bulletPoints: string[];
  dateStart: string;
  dateEnd?: string;
};

export default function JobSection(props: JobSectionProps) {
  return (
    <Grid className="whiteText" w={"95%"}>
      <Grid.Col span={3}>
        <Flex h={"100%"} justify={"flex-end"} align={"center"}>
          <Stack align="end">
            {props.dateEnd ? <Text fz={40}>{props.dateEnd} </Text> : <Text fz={40}>Current</Text>}
            <Text fz={40}>{props.dateStart}</Text>
          </Stack>

          <Divider orientation="vertical" mx={20} />
        </Flex>
      </Grid.Col>

      <Grid.Col span={9}>
        <Stack gap={"lg"}>
          <Flex justify={"space-between"} mb={10}>
            <Stack>
              <Title fz={40}>{props.title}</Title>

              <Group>
                <IconMapPin size={30} />
                <Title order={4}>{props.subtitle}</Title>
              </Group>
            </Stack>
          </Flex>

          <List>
            {props.bulletPoints.map((ele, i) => (
              <List.Item key={i}>
                <Text fz={20}>{ele}</Text>
              </List.Item>
            ))}
          </List>
        </Stack>
      </Grid.Col>
    </Grid>
  );
}
