"use server";

import { Inputs } from "../contact/ContactForm";
import mail from "@sendgrid/mail";
import { AsyncValue } from "./asyncValue";

const _email = "shafer.jason@gmail.com";

export default async function sendEmail(data: Inputs): Promise<AsyncValue> {
  try {
    mail.setApiKey(process.env.SENDGRID_API_KEY!);

    const msg: mail.MailDataRequired = {
      to: _email,
      from: { email: _email, name: "Crescendo Performance Consulting" },
      templateId: "d-b3af8ce6c3c54e099e7ca5c825df77d0",
      dynamicTemplateData: {
        contact_name: data.name,
        contact_email: data.email,
        contact_message: data.message,
      },
    };

    const res = await mail.send(msg);
    const code = res[0].statusCode;

    return code >= 200 && code < 300 ? AsyncValue.data : AsyncValue.error;
  } catch (err) {
    return AsyncValue.error;
  }
}
