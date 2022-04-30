import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticateDeliveryman(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({ message: "Token missing" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(
      token,
      "dea12ffb2578f2789b8bde3d446f3415"
    ) as IPayload;

    request.id_deliveryman = sub;

    return next();
  } catch (error) {
    console.log(error);
    return response.status(401).json({ message: "Invalid token!" });
  }
}
