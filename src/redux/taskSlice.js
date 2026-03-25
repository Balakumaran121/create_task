import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  loading: false,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    fetchTasks: (state) => {
      state.loading = true;
    },
    fetchTasksSuccess: (state, action) => {
      state.tasks = action.payload;
      state.loading = false;
    },
    addTask: (state) => {
      state.loading = true;
    },
    addTaskSuccess: (state, action) => {
      state.tasks.push(action.payload);
      state.loading = false;
    },
  },
});

export const {
  fetchTasks,
  fetchTasksSuccess,
  addTask,
  addTaskSuccess,
} = taskSlice.actions;

export default taskSlice.reducer;