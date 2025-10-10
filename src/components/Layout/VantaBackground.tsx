import { Center } from "@mantine/core";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import HALO from "vanta/dist/vanta.halo.min";

type Props = {
  children: React.ReactNode;
};

export default function VantaHalo({ children }: Props) {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const vantaEffect = useRef<ReturnType<typeof HALO> | null>(null);

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      vantaEffect.current = HALO({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        baseColor: 0x000000,
        backgroundColor: 0x000000,
      });
    }
  }, []);

  // useEffect(() => {
  //   updateHeight();
  //   window.addEventListener("resize", updateHeight);
  //   window.addEventListener("scroll", updateHeight);

  //   return () => {
  //     window.removeEventListener("resize", updateHeight);
  //     window.removeEventListener("scroll", updateHeight);
  //   };
  // }, []);

  return (
    <div ref={vantaRef} style={{ maxWidth: "100vw", height: "calc(90vh - 60px)" }}>
      <Center h={"100%"}>{children}</Center>
    </div>
  );
}
