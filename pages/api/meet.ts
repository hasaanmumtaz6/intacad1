import { mongooseConnection } from "@/lib/mongoose";
import { Meet } from "@/models/meet";
import nodemailer from "nodemailer";

export default async function handle(req: any, res: any) {
  const { method } = req;
  await mongooseConnection();

  if (method === "POST") {
    const {
      name,
      email,
      message,
      time,
      amPm,
      month,
      date,
      plateform,
      country,
    } = req.body;
    const transporter = nodemailer.createTransport({
      host: "smtp.privateemail.com",
      port: 465,
      secure: true,
      auth: {
        user: "contactus@startupmaxim.com",
        pass: "ContactUs-startupmaxim",
      },
    });

    try {
      await transporter.sendMail({
        from: "contactus@startupmaxim.com", // Set the sender email to match the authenticated sender
        to: email,
        subject: `Congratulation Your meeting now booked on ${date}-${month}`,
        text: message,
        html: `
        <strong>Hi ${name}</strong>
        <p>Your meet time should be now set on ${date}-${month} at ${time}${amPm} by using plateform ${plateform}</p>
        <strong>Regard,</strong>
        <strong>StartupMAXIM.</strong>
        `,
      });

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error: any) {
      console.error("Error sending email", error);
      res
        .status(500)
        .json({ message: "Error sending email", error: error.message });
    }
    const datesub = new Date();
    const meetDoc = await Meet.create({
      name,
      email,
      message,
      time,
      amPm,
      month,
      date,
      plateform,
      country,
      dateSub: datesub,
    });
    res.json(meetDoc);
  }
}
