import { Stack, Title } from "@mantine/core";
import { motion } from "framer-motion";
import VantaBackground from "./Layout/VantaBackground";

export default function HeroSection() {
  return (
    <Stack gap={0}>
      <VantaBackground>
        <Stack justify="end" h={"100%"}>
          <Stack className="whiteText" justify="center">
            <motion.div
              initial={{ opacity: 0 }} // stato iniziale
              whileInView={{ opacity: 1 }} // stato finale
              transition={{ duration: 2, ease: "easeOut", delay: 1 }} // durata e tipo di animazione
              style={{ marginBottom: -50 }}
            >
              <Title ta={"start"} size={60} className="whiteText">
                Full Stack Developer
              </Title>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} // stato iniziale
              whileInView={{ opacity: 1 }} // stato finale
              transition={{ duration: 1, ease: "easeOut" }} // durata e tipo di animazione
            >
              <Title ta={"center"} size={200}>
                Christian Armato
              </Title>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut", delay: 1 }}
              style={{ marginTop: -50 }}
            >
              <Title ta={"end"} size={30} className="whiteText">
                Building scalable web apps with precision and creativity.
              </Title>
            </motion.div>
          </Stack>
        </Stack>
      </VantaBackground>
    </Stack>
  );
}
