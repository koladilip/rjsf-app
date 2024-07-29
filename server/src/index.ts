import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import * as service from "./service";
import { randomUUID } from "crypto";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.post("/source/get/resources/:type", (req: Request, res: Response) => {
  const output = service.getSourceData(req.params.type);
  res.json(output);
});

app.post("/:destination/get/resources/:type", (req: Request, res: Response) => {
  const output = service.getDestinationData(
    req.params.destination,
    req.params.type,
    req.body
  );
  res.json(output);
});

app.post(
  "/:destination/create/resource/:type",
  (req: Request, res: Response) => {
    res.json({ id: randomUUID() });
  }
);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
