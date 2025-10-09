import { TextInput, TextInputProps } from "@mantine/core";

export default function CustomTextInput(props: TextInputProps) {
  return (
    <TextInput
      styles={(theme) => ({
        label: {
          color: theme.colors.site[2],
        },
        input: {
          borderColor: theme.colors.site[0],
          backgroundColor: theme.colors.dark[7],
          color: theme.colors.gray[0],
        },
      })}
      {...props}
    />
  );
}
