import nodemailer from "nodemailer";

export default async function handle(req: any, res: any) {
  const { method } = req;

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
        from: "contactus@startupmaxim.com",
        to: `${email}`,
        subject: `Your inquiry has been received.`,
        text: email,
        html: `<p>Hi <strong>${name}</strong></p><br>
           <p>Your inquiry has been received to our support team. One of our team members will be reaching out to you soon.</p><br>
           <p>Until then, please visit our website and explore more digital marketing options for your business: www.startupmaxim.com</p><br>
           <p>Or contact for more help here: contactus@startupmaxim.com</p><br />
           <strong>Regards,</strong><br>
           <p>Support Team,</p>
           <strong>StartupMAXIM.</strong><br>
           `,
      });

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error: any) {
      console.error("Error sending email", error);
      res
        .status(500)
        .json({ message: "Error sending email", error: error.message });
    }
  }
}
