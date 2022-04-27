import { Request, Response } from "express";
import { CreateClientUseCase } from "./CreateClientUseCase";

export class CreateClientController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const clientClientUseCase = new CreateClientUseCase();
    const result = await clientClientUseCase.execute({ username, password });

    return response.json(result);
  }
}
