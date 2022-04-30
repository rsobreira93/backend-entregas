import { prisma } from "../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface IAuthenticateDeliveryman {
  username: string;
  password: string;
}

export class AuthenticateDeliverymanUseCase {
  async execute({ password, username }: IAuthenticateDeliveryman) {
    const deliveryman = await prisma.clients.findFirst({
      where: {
        username: {
          mode: "insensitive",
        },
      },
    });

    if (!deliveryman) {
      throw new Error("username or password incorrect");
    }

    const passwordMatch = await compare(password, deliveryman.password);

    if (!passwordMatch) {
      throw new Error("username or password incorrect");
    }

    const token = sign({ username }, "dea12ffb2578f2789b8bde3d446f3415", {
      subject: deliveryman.id,
      expiresIn: "1d",
    });

    return token;
  }
}
