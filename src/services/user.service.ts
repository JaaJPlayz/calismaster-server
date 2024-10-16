import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
  getUserByEmail,
} from "../models/user.model";

import IUser from "../interfaces/IUser";

const getUserService = async (id: number) => {
  const user = await getUser(id);
  return user;
};

const createUserService = async (user: IUser) => {
  const id = await createUser(user);
  return id;
};

const getUsersService = async () => {
  const users = await getUsers();
  return users;
};

const updateUserService = async (user: IUser) => {
  const id = await updateUser(user);
  return id;
};

const deleteUserService = async (id: number) => {
  await deleteUser(id);
};

const getUserByEmailService = async (email: string) => {
  const user = await getUserByEmail(email);
  return user;
};

export {
  getUserService,
  createUserService,
  getUsersService,
  updateUserService,
  deleteUserService,
  getUserByEmailService,
};
