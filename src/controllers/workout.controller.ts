import {
  getWorkoutService,
  getWorkoutsService,
  createWorkoutService,
  updateWorkoutService,
  deleteWorkoutService,
} from "../services/workout.service";

import { Request, Response } from "express";

const getWorkoutsController = async (_req: Request, res: Response) => {
  const workouts = await getWorkoutsService();
  res.json({ data: workouts, message: null });
};

const getWorkoutController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const workout = await getWorkoutService(+id);
  res.json({ data: workout, message: null });
};

const createWorkoutController = async (req: Request, res: Response) => {
  const workout = req.body;
  const id = await createWorkoutService(workout);
  res.json({ data: id, message: null });
};

const updateWorkoutController = async (req: Request, res: Response) => {
  const workout = req.body;
  await updateWorkoutService(workout);
  res.json({ data: workout, message: "Workout updated successfully" });
};

const deleteWorkoutController = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteWorkoutService(+id);
  res.json({ data: null, message: "Workout deleted successfully" });
};

export {
  getWorkoutsController,
  getWorkoutController,
  createWorkoutController,
  updateWorkoutController,
  deleteWorkoutController,
};
