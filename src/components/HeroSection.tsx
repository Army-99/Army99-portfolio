import { Box, Stack, Title } from "@mantine/core";
import { motion } from "framer-motion";
import VantaBackground from "./Layout/VantaBackground";
import { useMediaQuery } from "@mantine/hooks";

const Motion = motion.div;

export default function HeroSection() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Stack gap={0}>
      <VantaBackground>
        <Stack justify={"end"} h={"90%"} pt={10}>
          <Stack className="whiteText" justify="center" gap={50}>
            <Motion
              initial={{ opacity: 0 }} // stato iniziale
              whileInView={{ opacity: 1 }} // stato finale
              transition={{ duration: 2, ease: "easeOut", delay: 1 }} // durata e tipo di animazione
              style={{ marginBottom: "-9vh" }}
            >
              <Title order={isMobile ? 4 : 2} ta={"start"} className="whiteText">
                Full Stack Developer
              </Title>
            </Motion>

            <Motion
              initial={{ opacity: 0 }} // stato iniziale
              whileInView={{ opacity: 1 }} // stato finale
              transition={{ duration: 1, ease: "easeOut" }} // durata e tipo di animazione
            >
              <Title fz={isMobile ? 40 : undefined} order={isMobile ? undefined : 1} ta={"center"}>
                Christian Armato
              </Title>
            </Motion>

            <Box visibleFrom="sm">
              <Motion
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut", delay: 1 }}
                style={{ marginTop: "-9vh" }}
              >
                <Title ta={"end"} order={isMobile ? 4 : 3} className="whiteText">
                  Building scalable web apps with precision and creativity.
                </Title>
              </Motion>
            </Box>
          </Stack>
        </Stack>
      </VantaBackground>
    </Stack>
  );
}
