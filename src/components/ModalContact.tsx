import { Group, Stack, TextInput, Textarea } from "@mantine/core";
import emailjs from "emailjs-com";
import { useState } from "react";
import CustomModal from "./CustomModal";
import PrimaryButton from "./PrimaryButton";

const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const initialForm = { name: "", email: "", message: "", phone: "" };

export default function ContactModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const sendEmail = async () => {
    setLoading(true);

    const message =
      "Name: " + form.name + "\nEmail: " + form.email + "\nPhone: " + form.phone + "\nMessage: " + form.message;

    try {
      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: form.name,
          from_email: form.email,
          message: message,
        },
        publicKey
      );

      alert("Message sent successfully!");

      onClose();
      setForm(initialForm);
    } catch (error) {
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <CustomModal onClose={onClose} title="Contact Me" size={"lg"}>
      <Stack>
        <TextInput
          label="Name"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
          mb="sm"
        />
        <TextInput
          label="Email"
          name="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          required
          mb="sm"
        />
        <TextInput
          label="Phone"
          name="phone"
          placeholder="Your phone number"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <Textarea
          label="Message"
          name="message"
          placeholder="Tell me about your project..."
          value={form.message}
          onChange={handleChange}
          required
          minRows={4}
        />

        <Group justify="flex-end" mt="md">
          <PrimaryButton loading={loading} onClick={sendEmail}>
            Send message
          </PrimaryButton>
        </Group>
      </Stack>
    </CustomModal>
  );
}
