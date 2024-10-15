import IWorkout from "../interfaces/IWorkout";
import db from "../database/connection";

const createWorkout = async (workout: IWorkout) => {
  const { name, sets, reps, weight, rest, description } = workout;
  const [id] = await db("workouts").insert({
    name,
    sets,
    reps,
    weight,
    rest,
    description,
  });
  return id;
};

const getWorkouts = async () => {
  const workouts = await db("workouts");
  return workouts;
};

const getWorkout = async (id: number) => {
  const workout = await db("workouts").where({ id }).first();
  return workout;
};

const updateWorkout = async (workout: IWorkout) => {
  const { id, name, sets, reps, weight, rest, description } = workout;
  await db("workouts")
    .where({ id })
    .update({ name, sets, reps, weight, rest, description });
};

const deleteWorkout = async (id: number) => {
  await db("workouts").where({ id }).del();
};

export default {
  createWorkout,
  getWorkouts,
  getWorkout,
  updateWorkout,
  deleteWorkout,
};
