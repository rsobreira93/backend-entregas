import { UpdateDeliverymanUseCase } from "./UpdateDeliverymanUseCase";
import { Request, Response } from "express";

export class UpdateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { id: id_delivery } = request.params;
    const { id_deliveryman } = request;

    const updateDeliverymanUseCase = new UpdateDeliverymanUseCase();

    const delivery = await updateDeliverymanUseCase.execute({
      id_deliveryman,
      id_delivery,
    });

    return response.json(delivery);
  }
}
