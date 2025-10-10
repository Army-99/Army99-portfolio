import { Divider, Flex, Grid, Group, List, Stack, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconMapPin } from "@tabler/icons-react";

export type JobSectionProps = {
  title: string;
  subtitle: string;
  bulletPoints: string[];
  dateStart: string;
  dateEnd?: string;
};

export default function JobSection(props: JobSectionProps) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Grid className="whiteText" w={"95%"}>
      <Grid.Col span={3} visibleFrom="sm">
        <Flex h={"100%"} justify={"flex-end"} align={"center"}>
          <Stack align="end">
            {props.dateEnd ? <Text fz={40}>{props.dateEnd} </Text> : <Text fz={40}>Current</Text>}
            <Text fz={40}>{props.dateStart}</Text>
          </Stack>

          <Divider orientation="vertical" mx={20} />
        </Flex>
      </Grid.Col>

      <Grid.Col span={isMobile ? 12 : 9}>
        <Stack gap={"lg"}>
          <Flex mb={10} justify={isMobile ? "center" : "flex-start"}>
            <Stack>
              <Title ta={isMobile ? "center" : "start"} fz={40}>
                {props.title}
              </Title>

              <Group hiddenFrom="sm" justify="center">
                <Text fz={20}>{props.dateStart}</Text>
                <Divider orientation="horizontal" w={10} mx={10} />
                {props.dateEnd ? <Text fz={20}>{props.dateEnd} </Text> : <Text fz={20}>Current</Text>}
              </Group>

              <Group justify={isMobile ? "center" : "flex-start"}>
                <IconMapPin size={30} />
                <Title order={4}>{props.subtitle}</Title>
              </Group>
            </Stack>
          </Flex>

          <List p={isMobile ? 10 : 0}>
            {props.bulletPoints.map((ele, i) => (
              <List.Item key={i}>
                <Text fz={isMobile ? 15 : 20}>{ele}</Text>
              </List.Item>
            ))}
          </List>
        </Stack>
      </Grid.Col>
    </Grid>
  );
}
