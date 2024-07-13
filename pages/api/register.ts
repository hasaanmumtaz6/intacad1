import { Register } from "@/models/register";
import { mongooseConnection } from "@/lib/mongoose";
import { ObjectId } from "mongodb";
import bcrypt from "bcrypt";

export default async function handle(req: any, res: any) {
  const { method } = req;
  await mongooseConnection();

  if (method === "GET") {
    res.json(await Register.find());
  }

  if (method === "POST") {
    const { name, username, email, password, usertype } = req.body;

    // Check if a user with the same email or username already exists
    const existingUser = await Register.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      res.status(400).json({ message: "User already registered" });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const registerDoc = await Register.create({
      name,
      username,
      email,
      usertype,
      password: hashedPassword,
    });
    res.json(registerDoc);
  }

  if (method === "PUT") {
    const { id, name, email, username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = { _id: new ObjectId(id) };
    const update = {
      $set: {
        name: name,
        username: username,
        password: hashedPassword,
        email: email,
      },
    };
    const result = await Register.updateOne(userId, update);
    res.status(200).json({ message: `${result} updated` });
  }
}
