import { prisma } from "../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface IAuthenticateClient {
  username: string;
  password: string;
}

export class AuthenticateClientUseCase {
  async execute({ password, username }: IAuthenticateClient) {
    const client = await prisma.clients.findFirst({
      where: {
        username: {
          mode: "insensitive",
        },
      },
    });

    if (!client) {
      throw new Error("username or password incorrect");
    }

    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) {
      throw new Error("username or password incorrect");
    }

    const token = sign({ username }, "eea12ffb2578f2789b8bde3d446f3415", {
      subject: client.id,
      expiresIn: "1d",
    });

    return token;
  }
}
