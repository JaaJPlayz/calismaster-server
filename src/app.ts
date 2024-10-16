import express, { Request, Response } from "express";
import { PORT } from "./constants";

import workoutRouter from "./routers/workout.router";

const app = express();

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/api/workouts", workoutRouter);

app.listen(PORT, () => {
  console.log("Example app listening on port 3000!");
});
