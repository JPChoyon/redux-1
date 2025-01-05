import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface initialState {
  task: ITask[];
}
const initialState: initialState = {
  task: [
    {
      id: "ab1234",
      title: "title",
      description: "des",
      dueDate: "2025-12",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "ab124",
      title: "title",
      description: "des",
      dueDate: "2025-12",
      isCompleted: false,
      priority: "Low",
    },
    {
      id: "ab134",
      title: "title",
      description: "des",
      dueDate: "2025-12",
      isCompleted: false,
      priority: "Medium",
    },
  ],
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});
export const selectTask = (state: RootState) => {
  return state.tasks.task;
};
export default taskSlice.reducer;
