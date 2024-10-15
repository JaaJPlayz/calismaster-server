import express from "express";

const workoutRouter = express.Router();

import {
  getWorkoutsController,
  getWorkoutController,
  createWorkoutController,
  updateWorkoutController,
  deleteWorkoutController,
} from "../controllers/workout.controller";

workoutRouter.get("/", getWorkoutsController);
workoutRouter.get("/:id", getWorkoutController);
workoutRouter.post("/", createWorkoutController);
workoutRouter.put("/:id", updateWorkoutController);
workoutRouter.delete("/:id", deleteWorkoutController);

export default workoutRouter;
