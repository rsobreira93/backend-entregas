import { FindAllDeliveriesDeliverymanController } from "./modules/deleveyman/useCases/FindAllDeliveries/FindaAllDeliveriesDeliverymanController";
import { FindAllDeliveriesController } from "./modules/clients/useCases/deliveries/FindAllDeliveriesController";
import { UpdateDeliverymanController } from "./modules/deliveries/useCases/updateDeliveryman/useCases/UpdateDeliverymanController";
import { FindAllAvailableController } from "./modules/deliveries/useCases/findAllAvailable/findAllAvailableController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { Router } from "express";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { CreateDeliverymanController } from "./modules/deleveyman/useCases/createDeliveryman/CreateDeliverymanController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryman } from "./middlewares/ensureAuthenticateDeliveryman";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();
const createDeliveryController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController();
const updateDeliverymanController = new UpdateDeliverymanController();
const findAllDeliveriesController = new FindAllDeliveriesController();
const findAllDeliveriesDeliverymanController =
  new FindAllDeliveriesDeliverymanController();

routes.post("/client/authenticate", authenticateClientController.handle);
routes.post(
  "/deliveryman/authenticate",
  authenticateDeliverymanController.handle
);

routes.post("/client", createClientController.handle);
routes.post("/deliveryman", createDeliverymanController.handle);

routes.post(
  "/delivery",
  ensureAuthenticateClient,
  createDeliveryController.handle
);

routes.get(
  "/delivery/available",
  ensureAuthenticateDeliveryman,
  findAllAvailableController.handle
);

routes.put(
  "/delivery/updateDeliveryman/:id",
  ensureAuthenticateDeliveryman,
  updateDeliverymanController.handle
);

routes.get(
  "/client/deliveries",
  ensureAuthenticateClient,
  findAllDeliveriesController.handle
);

routes.get(
  "/deliveryman/deliveries",
  ensureAuthenticateDeliveryman,
  findAllDeliveriesDeliverymanController.handle
);

export { routes };
