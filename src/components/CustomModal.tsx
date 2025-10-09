import { Modal, ModalBaseProps, Title } from "@mantine/core";
import styles from "./CustomModal.module.scss"; // Assuming you have a CSS module for styles

type Props = {
  onClose: () => void;
  title: React.ReactNode;
  children: React.ReactNode;
  size: ModalBaseProps["size"];
};

export default function CustomModal({ onClose, children, title, size }: Props) {
  return (
    <Modal
      classNames={styles}
      size={size}
      opened={true}
      onClose={onClose}
      title={
        <Title c="site.2" order={3}>
          {title}
        </Title>
      }
    >
      {children}
    </Modal>
  );
}
