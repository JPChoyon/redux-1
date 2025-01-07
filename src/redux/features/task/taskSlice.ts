/* eslint-disable @typescript-eslint/no-unused-expressions */
import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface initialState {
  task: ITask[];
}
const initialState: initialState = {
  task: [],
};
type draftTask = Pick<ITask, "title" | "description" | "priority" | "dueDate">;
const createTask = (taskData: draftTask): ITask => {
  return { id: nanoid(), isCompleted: false, ...taskData };
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<draftTask>) => {
      const taskData = createTask(action.payload);
      state.task.push(taskData);
    },
    completeTask: (state, action: PayloadAction<string>) => {
      state.task.forEach((task) => {
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task;
      });
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.task = state.task.filter((task) => task.id !== action.payload);
    },
  },
});
export const selectTask = (state: RootState) => {
  return state.tasks.task;
};
export const { addTask, completeTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
