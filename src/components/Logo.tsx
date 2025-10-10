import { ActionIconProps } from "@mantine/core";
import img from "../assets/logo.png";

type Props = ActionIconProps;

export default function Logo(props: Props) {
  return <img src={img} alt="Logo" style={{ width: props.size, height: props.size }} />;
}
