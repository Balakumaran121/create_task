import { useState } from "react";
import { useSelector } from "react-redux";
import TaskCard from "./components/TaskList";
import Modal from "./components/Modal";
import TaskModal from "./components/TaskForms";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTasks } from "./redux/taskSlice";


const App = () => {
  const [open, setOpen] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  const { tasks } = useSelector((state) => state.task);

  const handleEdit = (task) => {
    setEditTask(task);
    setOpen(true);
  };

  return (
    <div className="p-6">

      
      <div className="flex justify-between mb-4">
        <h1 className="text-xl font-bold">Task Management Dashboard</h1>

        <button
          onClick={() => {
            setEditTask(null);
            setOpen(true);
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          + Create Task
        </button>
      </div>

      
      <div className="flex gap-4 flex-wrap">
        {tasks?.length === 0 ? (
          <p>No tasks available</p>
        ) : (
          tasks?.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onEdit={handleEdit}
              onDelete={(id) => console.log("delete", id)}
            />
          ))
        )}
      </div>

      
      <Modal open={open} onClose={() => setOpen(false)}>
        <TaskModal editTask={editTask} />
      </Modal>
    </div>
  );
};

export default App;