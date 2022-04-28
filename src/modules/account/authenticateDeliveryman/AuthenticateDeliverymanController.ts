import { Request, Response } from "express";
import { AuthenticateClientUseCase } from "../authenticateClient/AuthenticateClientUseCase";

export class AuthenticateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const authenticateDeliverymanUseCase = new AuthenticateClientUseCase();

    const result = await authenticateDeliverymanUseCase.execute({
      username,
      password,
    });

    return response.json(result);
  }
}
