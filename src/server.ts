import Express from "express";
import { routes } from "./routes";

const app = Express();

app.use(Express.json());

app.use(routes);

app.listen(3000, () => console.log("Server is running on port 3000"));
