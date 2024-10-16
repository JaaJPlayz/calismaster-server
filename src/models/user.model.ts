import db from "../database/connection";
import IUser from "../interfaces/IUser";
import IWorkout from "../interfaces/IWorkout";

const getUsers = async () => {
  const users = await db("users");
  return users;
};

const getUser = async (id: number) => {
  const user = await db("users").where({ id }).first();
  return user;
};

const getUserByEmail = async (email: string) => {
  const user = await db("users").where({ email }).first();
  return user;
};

const createUser = async (user: IUser) => {
  const { name, email, password } = user;
  const workouts: IWorkout[] = [];
  const [id] = await db("users").insert({ name, email, password, workouts });
  return id;
};

const updateUser = async (user: IUser) => {
  const { id, name, email, password } = user;
  await db("users").where({ id }).update({ name, email, password });
};

const deleteUser = async (id: number) => {
  await db("users").where({ id }).del();
};

export {
  createUser,
  getUser,
  getUsers,
  deleteUser,
  updateUser,
  getUserByEmail,
};
