import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

const TaskModal = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addTask(data));
    reset()
    onClose(); 
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Create New Task</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <div>
          <input
            {...register("title", { required: "Title is required" })}
            placeholder="Enter task title..."
            className="border p-2 w-full"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
        </div>

        <select {...register("type", { required: true })} className="border p-2 w-full">
          <option value="">Task Type</option>
          <option value="Bug">Bug</option>
          <option value="Feature">Feature</option>
        </select>

        <select {...register("priority", { required: true })} className="border p-2 w-full">
          <option value="">Priority</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <select {...register("project")} className="border p-2 w-full">
          <option value="">Select Project</option>
          <option>Project A</option>
          <option>Project B</option>
        </select>

        <select {...register("assignee")} className="border p-2 w-full">
          <option value="">Unassigned</option>
          <option>User 1</option>
          <option>User 2</option>
        </select>

        <textarea
          {...register("description")}
          placeholder="Enter task description..."
          className="border p-2 w-full"
        />

        <input
          type="date"
          {...register("dueDate")}
          className="border p-2 w-full"
        />

        <select {...register("severity", { required: true })} className="border p-2 w-full">
          <option value="">Severity</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <button className="bg-blue-500 text-white w-full py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TaskModal;