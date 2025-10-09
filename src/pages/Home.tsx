import { Stack } from "@mantine/core";
import Automate from "../components/Automate/Automate";
import HeroSection from "../components/HeroSection";
import WhoAmI from "../components/WhoAmI/WhoAmI";
import Experience from "./Experience";
import Projects from "./Projects";

function Home() {
  return (
    <Stack gap={"lg"}>
      <HeroSection />

      <Automate />

      <WhoAmI />

      <Experience />

      <Projects />
    </Stack>
  );
}

export default Home;
