import { Modal, ModalBaseProps, Title, useMantineTheme } from "@mantine/core";
import styles from "./CustomModal.module.scss"; // Assuming you have a CSS module for styles

type Props = {
  onClose: () => void;
  title: React.ReactNode;
  children: React.ReactNode;
  size: ModalBaseProps["size"];
};

export default function CustomModal({ onClose, children, title, size }: Props) {
  const theme = useMantineTheme();
  return (
    <Modal
      classNames={{
        close: styles.closeButton,
      }}
      styles={{
        header: {
          backgroundColor: theme.colors.site[0],
        },
        body: {
          backgroundColor: theme.colors.site[0],
        },
        close: {
          color: theme.colors.site[1],
        },
      }}
      size={size}
      opened={true}
      onClose={onClose}
      title={
        <Title c="site.2" order={2}>
          {title}
        </Title>
      }
    >
      {children}
    </Modal>
  );
}
