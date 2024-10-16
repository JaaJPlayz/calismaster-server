import IWorkout from "./IWorkout";

export default interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  workouts: IWorkout[];
}
