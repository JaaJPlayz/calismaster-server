import IWorkout from "../interfaces/IWorkout";

import {
  getWorkout,
  getWorkouts,
  createWorkout,
  updateWorkout,
  deleteWorkout,
} from "../models/workout.model";

const getWorkoutService = async (id: number) => {
  const workout = await getWorkout(id);
  return workout;
};

const getWorkoutsService = async () => {
  const workouts = await getWorkouts();
  return workouts;
};

const createWorkoutService = async (workout: IWorkout) => {
  const id = await createWorkout(workout);
  return id;
};

const updateWorkoutService = async (workout: IWorkout) => {
  await updateWorkout(workout);
};

const deleteWorkoutService = async (id: number) => {
  await deleteWorkout(id);
};

export {
  getWorkoutService,
  getWorkoutsService,
  createWorkoutService,
  updateWorkoutService,
  deleteWorkoutService,
};
