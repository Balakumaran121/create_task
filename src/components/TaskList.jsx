const TaskCard = ({ task, onEdit, onDelete }) => {
  const getTypeColor = () => {
    if (task.type === "Bug") return "bg-red-500";
    if (task.type === "Feature") return "bg-yellow-500";
    return "bg-gray-500";
  };

  const getPriorityColor = () => {
    if (task.priority === "High") return "text-red-500";
    if (task.priority === "Medium") return "text-orange-500";
    return "text-green-500";
  };

  return (
    <div className="w-80 bg-white border rounded-lg p-4 shadow-sm relative">
      
      
      <div className="flex justify-between items-start">
        <div className="flex gap-2 items-center">
          <span className={`text-xs text-white px-2 py-1 rounded ${getTypeColor()}`}>
            {task.type}
          </span>
          <span className="text-xs text-blue-500 font-medium">
            {task.status || "Todo"}
          </span>
        </div>

        <div className="flex gap-2 text-gray-500 cursor-pointer">
          <span onClick={() => onEdit(task)}>✏️</span>
          <span onClick={() => onDelete(task.id)}>🗑️</span>
        </div>
      </div>

      
      <h3 className="font-bold text-lg mt-2">{task.title}</h3>

      
      <p className="text-sm text-gray-500 mt-1 line-clamp-2">
        {task.description}
      </p>

      
      <div className="mt-3 text-sm space-y-1">
        <p>
          <span className="text-gray-400">Assignee:</span>{" "}
          {task.assignee || "Unassigned"}
        </p>

        <p>
          <span className="text-gray-400">Priority:</span>{" "}
          <span className={getPriorityColor()}>
            {task.priority}
          </span>
        </p>

        {task.dueDate && (
          <p className="text-red-500">
            Due: {task.dueDate}
          </p>
        )}
      </div>
    </div>
  );
};

export default TaskCard;