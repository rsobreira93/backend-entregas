import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { Router } from "express";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { CreateDeliverymanController } from "./modules/deleveyman/useCases/createDeliveryman/CreateDeliverymanController";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createDeliverymanController = new CreateDeliverymanController();

routes.post("/client", createClientController.handle);
routes.post("/authenticate", authenticateClientController.handle);
routes.post("/deliveryman", createDeliverymanController.handle);

export { routes };
