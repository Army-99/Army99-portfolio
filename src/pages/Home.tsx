import { Flex, Image, Stack, Text, Title } from "@mantine/core";
import img from "../assets/CA.jpeg";
import CustomCard from "../components/CustomCard";

function Home() {
    return (
        <Stack mt={20} gap={"lg"}>
            <Flex gap={"xl"}>
                <Stack className="whiteText" justify="center">
                    <Title order={1}>Christian Armato</Title>
                    <Text fw={700} size={"50px"} variant="gradient" gradient={{ from: "white", to: "blue", deg: 90 }}>
                        Full Stack Developer
                    </Text>
                    {/* <Group justify="center">
                            <Text size="xl">+39 3289494007 </Text>
                            <Text size="xl">christian.armato99@gmail.com</Text>
                        </Group> */}
                </Stack>

                <Image h={400} w={300} src={img} radius={"lg"} fit="cover" />
            </Flex>

            <CustomCard>
                <Stack p={20}>
                    <Text ta={"center"} className="whiteText" size="xl">
                        Innovative Full-stack Developer with over 5 years of experience in software development.
                    </Text>
                    <Text ta={"center"} className="whiteText" size="xl">
                        Proven track record in enhancing operational efficiency and delivering exceptional solutions.
                    </Text>
                    <Text ta={"center"} className="whiteText" size="xl">
                        Specializes in utilizing cutting-edge technologies to streamline processes and elevate overall
                        performance.
                    </Text>
                </Stack>
            </CustomCard>
        </Stack>
    );
}

export default Home;
