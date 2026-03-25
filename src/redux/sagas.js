import { all, takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import { fetchTasksSuccess, addTaskSuccess } from "./taskSlice";

const API = "http://localhost:3001/tasks";


function* fetchTasksSaga() {
  const res = yield axios.get(API);
  yield put(fetchTasksSuccess(res.data));
}


function* addTaskSaga(action) {
  const res = yield axios.post(API, action.payload);
  yield put(addTaskSuccess(res.data));
}

export default function* rootSaga() {
  yield all([
    takeLatest("task/fetchTasks", fetchTasksSaga),
    takeLatest("task/addTask", addTaskSaga),
  ]);
}