import { Modal, ModalBaseProps, Title } from "@mantine/core";
import styles from "./CustomModal.module.scss";

type Props = {
  opened?: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  children: React.ReactNode;
  size?: ModalBaseProps["size"];
};

export default function CustomModal({ opened = true, onClose, children, title, size = "md" }: Props) {
  const titleNode = title == null ? undefined : typeof title === "string" ? <Title order={3}>{title}</Title> : title;

  return (
    <Modal
      classNames={{
        close: styles.closeButton,
        header: styles.header,
        body: styles.body,
        content: styles.content,
        overlay: styles.overlay,
        title: styles.title,
      }}
      size={size}
      opened={opened}
      onClose={onClose}
      title={titleNode}
      centered
      transitionProps={{ transition: "scale", duration: 300 }}
    >
      {children}
    </Modal>
  );
}
