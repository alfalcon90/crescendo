"use client";

import { useForm } from "react-hook-form";
import InputField from "@/components/InputField";
import TextArea from "@/components/TextArea";
import Button from "@/components/Button";
import { PiEnvelopeLight } from "react-icons/pi";

export default function ContactForm() {
  const {
    register,
    formState: { isValid },
  } = useForm<Inputs>();

 
  return (
    <form
      className="flex w-full flex-col space-y-3 sm:space-y-6"
     action="https://submit-form.com/nI6DI4Ehp"
data-botpoison-public-key="pk_a0a63004-666d-422f-be59-ccf1299bb595"
    >
      <InputField
        id="name"
        type="text"
        name="name"
        placeholder="Jon Snow"
        label="Name"
        attr={register("name", { required: "Name is required" })}
      />
      <InputField
        id="email"
        type="email"
        name="email"
        placeholder="jon@snow.com"
        label="Email"
        attr={register("email", {
          required: "Email is required",
          pattern: {
            value:
              /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
            message: "Invalid email address",
          },
        })}
      />
      <TextArea
        id="message"
        name="message"
        placeholder="Type your message..."
        label="Message"
        attr={register("message", { required: "Message is required" })}
      />
      <Button
        className="self-center md:self-start"
        type="submit"
        leadingIcon={PiEnvelopeLight}
        disabled={!isValid}
      >
        Send message
      </Button>
    </form>
  );
}

export type Inputs = {
  name: string;
  email: string;
  message: string;
};
