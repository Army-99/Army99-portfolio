import { Anchor, Flex, rem, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconPhone } from "@tabler/icons-react";
import PrimaryButton from "./PrimaryButton";
import { useNavigate } from "react-router-dom";

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
  const isMobile = useMediaQuery("(max-width: 768px)");
  const iconSize = isMobile ? rem(20) : rem(33);

  return (
    <>
      <ContactIcon
        link={`tel:${UTENTE.phone}`}
        icon={<IconPhone style={{ width: iconSize, height: iconSize }} stroke={1.5} />}
        text={withText ? UTENTE.phone : undefined}
      />

      <ContactIcon
        link={`mailto:${UTENTE.email}`}
        icon={<IconMail style={{ width: iconSize, height: iconSize }} stroke={1.5} />}
        text={withText ? UTENTE.email : undefined}
      />

      <ContactIcon
        link={`https://github.com/${UTENTE.github}`}
        icon={<IconBrandGithub style={{ width: iconSize, height: iconSize }} stroke={1.5} />}
        text={withText ? UTENTE.github : undefined}
      />

      <ContactIcon
        link={`https://www.linkedin.com/in/${UTENTE.linkedin}`}
        icon={<IconBrandLinkedin style={{ width: iconSize, height: iconSize }} stroke={1.5} />}
        text={withText ? UTENTE.linkedin : undefined}
      />
    </>
  );
}

function ContactIcon({ link, icon, text }: { link?: string; icon?: JSX.Element; text?: string }) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const navigate = useNavigate();

  function onClick() {
    if (link?.startsWith("http")) {
      window.open(link, "_blank", "noopener noreferrer");
    } else if (link?.startsWith("mailto:") || link?.startsWith("tel:")) {
      window.location.href = link;
    } else {
      navigate(link || "/");
    }
  }

  return (
    <Flex align={"center"} gap={"lg"}>
      <PrimaryButton
        onClick={onClick}
        mih={isMobile ? 34 : 50}
        miw={isMobile ? 34 : undefined}
        p={isMobile ? 4 : undefined}
      >
        {icon}
      </PrimaryButton>
      {text && (
        <Anchor href={link} target="_blank" underline={"never"}>
          <Text fz={isMobile ? 12 : 16} c={"rgba(255,255,255,0.75)"}>
            {text}
          </Text>
        </Anchor>
      )}
    </Flex>
  );
}
