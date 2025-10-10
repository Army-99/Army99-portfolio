import { Flex, ActionIcon, rem, Text, Anchor } from "@mantine/core";
import { IconMail, IconPhone, IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import styles from "./Buttons.module.scss";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mantine/hooks";

type Props = {
  withText?: boolean;
};

const UTENTE = {
  email: "christian.armato99@gmail.com",
  phone: "+39 3289494007",
  github: "Army-99",
  linkedin: "christian-armato",
};

export default function ContactIcons({ withText }: Props) {
  return (
    <>
      <ContactIcon
        link={`tel:${UTENTE.phone}`}
        icon={<IconPhone style={{ width: rem(33), height: rem(36) }} stroke={1.5} />}
        text={withText ? UTENTE.phone : undefined}
      />

      <ContactIcon
        link={`mailto:${UTENTE.email}`}
        icon={<IconMail style={{ width: rem(33), height: rem(36) }} stroke={1.5} />}
        text={withText ? UTENTE.email : undefined}
      />

      <ContactIcon
        link={`https://github.com/${UTENTE.github}`}
        icon={<IconBrandGithub style={{ width: rem(33), height: rem(36) }} stroke={1.5} />}
        text={withText ? UTENTE.github : undefined}
      />

      <ContactIcon
        link={`https://www.linkedin.com/in/${UTENTE.linkedin}`}
        icon={<IconBrandLinkedin style={{ width: rem(33), height: rem(36) }} stroke={1.5} />}
        text={withText ? UTENTE.linkedin : undefined}
      />
    </>
  );
}

const MotionDiv = motion.div;

function ContactIcon({ link, icon, text }: { link?: string; icon?: JSX.Element; text?: string }) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Flex align={"center"} gap={"lg"}>
      <MotionDiv
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 250, damping: 15 }}
        style={{ display: "inline-block" }}
      >
        <ActionIcon size={50} onClick={() => window.open(link)} className={text ? styles.primary : styles.transparent}>
          {icon}
        </ActionIcon>
      </MotionDiv>
      <Anchor href={link} target="_blank" underline={"never"}>
        {text && (
          <Text fz={isMobile ? 12 : 16} c={"site.0"}>
            {text}
          </Text>
        )}
      </Anchor>
    </Flex>
  );
}
