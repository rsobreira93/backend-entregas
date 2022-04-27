import "express-async-errors";
import Express, { NextFunction, Request, Response } from "express";
import { routes } from "./routes";

const app = Express();

app.use(Express.json());

app.use(routes);

app.use(
  (
    err: Error,
    request: Request,
    response: Response,
    nextFunction: NextFunction
  ) => {
    if (err instanceof Error) {
      return response.status(400).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      message: "Internal server error",
    });
  }
);

app.listen(3000, () => console.log("Server is running on port 3000"));
