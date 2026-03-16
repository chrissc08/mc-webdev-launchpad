import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, business, email, phone, message } = req.body;

    if (!name || !business || !email) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const { error } = await resend.emails.send({
      from: "Website Contact <leads@hudsonvalleywebdev.com>",
      to: "hudsonvalleywebdev@gmail.com",
      subject: `Free Mockup Request from ${name} — ${business}`,
      replyTo: email,
      text: `
Name: ${name}
Business: ${business}
Email: ${email}
Phone: ${phone || "N/A"}

Message:
${message || ""}
      `,
    });

    if (error) {
      console.error(error);
      return res.status(500).json({ error: "Email failed to send" });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
}