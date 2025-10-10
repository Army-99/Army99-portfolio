import { Box, Stack, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import CustomAnimationShow from "./Animations/CustomAnimationShow";
import VantaBackground from "./Layout/VantaBackground";

export default function HeroSection() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Stack gap={0}>
      <VantaBackground>
        <Stack justify={isMobile ? "start" : "end"} h={"90%"} pt={10} w={"100%"} ml={10} mr={15}>
          <Stack className="whiteText" justify="center" gap={50}>
            <CustomAnimationShow delay={1} style={{ marginBottom: "-5vh" }}>
              <Title order={isMobile ? 4 : 2} ta={"start"} className="whiteText">
                Full Stack Developer
              </Title>
            </CustomAnimationShow>

            <CustomAnimationShow>
              <Title fz={isMobile ? 40 : undefined} order={isMobile ? undefined : 1} ta={isMobile ? "end" : "center"}>
                Christian {isMobile && <br />}Armato
              </Title>
            </CustomAnimationShow>

            <Box visibleFrom="sm">
              <CustomAnimationShow delay={1} style={{ marginTop: "-5vh" }}>
                <Title ta={"end"} order={isMobile ? 4 : 3} className="whiteText">
                  Building scalable web apps with precision and creativity.
                </Title>
              </CustomAnimationShow>
            </Box>
          </Stack>
        </Stack>
      </VantaBackground>
    </Stack>
  );
}
