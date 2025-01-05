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
  ],
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});
export default taskSlice.reducer;
