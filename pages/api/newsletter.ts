import { mongooseConnection } from "@/lib/mongoose";
import { Newsletter } from "@/models/newsletter";

export default async function handle(req: any, res: any) {
  const { method } = req;
  await mongooseConnection();

  if (method === "POST") {
    const { email } = req.body;
    const date = new Date();
    const newsletterDoc = await Newsletter.create({
      email,
      date: date,
    });
    res.json(newsletterDoc);
  }
}
