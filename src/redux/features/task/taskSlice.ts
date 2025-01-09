/* eslint-disable @typescript-eslint/no-unused-expressions */
import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface initialState {
  task: ITask[];
  filter: "All" | "High" | "Low" | "Medium";
}
const initialState: initialState = {
  task: [
    {
      id: "e45g44j1MJmnofOla7vmc",
      isCompleted: false,
      title: "Consectetur ratione",
      description: "Ratione rem voluptat",
      dueDate: "2025-01-29T18:00:00.000Z",
      priority: "High",
    },
  ],
  filter: "All",
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
    updateFilter: (
      state,
      action: PayloadAction<"All" | "High" | "Low" | "Medium">
    ) => {
      state.filter = action.payload;
    },
  },
});
export const selectTask = (state: RootState) => {
  const filter = state.tasks.filter;
  if (filter === "Low") {
    return state.tasks.task.filter((task) => task.priority === "Low");
  } else if (filter === "High") {
    return state.tasks.task.filter((task) => task.priority === "High");
  } else if (filter === "Medium") {
    return state.tasks.task.filter((task) => task.priority === "Medium");
  } else {
    return state.tasks.task;
  }
};
export const selectTaskFilter = (state: RootState) => {
  return state.tasks.filter;
};
export const { addTask, completeTask, deleteTask, updateFilter } =
  taskSlice.actions;
export default taskSlice.reducer;
