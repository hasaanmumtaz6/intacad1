import { mongooseConnection } from "@/lib/mongoose";
import { Contact } from "@/models/contact";
import nodemailer from "nodemailer";

export default async function handle(req: any, res: any) {
  const { method } = req;
  await mongooseConnection();

  if (method === "POST") {
    const { name, email, message } = req.body;
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
        to: "contactus@startupmaxim.com",
        subject: `New contact form submission from ${name}`,
        text: message,
        html: `<p>You have a new contact form submission</p><br>
           <p><strong>Name: </strong> ${name} </p><br>
           <p><strong>Email: </strong> ${email} </p><br>
           <p><strong>Message: </strong> ${message} </p><br>`,
      });

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error: any) {
      console.error("Error sending email", error);
      res
        .status(500)
        .json({ message: "Error sending email", error: error.message });
    }

    const date = new Date();
    const contactDoc = await Contact.create({
      name,
      email,
      message,
      date: date,
    });
    res.json(contactDoc);
  }
}
