export default interface IWorkout {
  id: number;
  name: string;
  sets: number;
  reps: number;
  weight?: number | null;
  rest: number;
  description?: string | null;
  createdAt: Date;
  updatedAt: Date;
}
