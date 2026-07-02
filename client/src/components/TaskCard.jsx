import { CalendarDays, Pencil, Trash2 } from "lucide-react";

const TaskCard = ({ task, onEdit, onDelete }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700";

      case "In-Progress":
        return "bg-yellow-100 text-yellow-700";

      case "Pending":
      default:
        return "bg-red-100 text-red-700";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-5 border border-gray-200 hover:shadow-lg transition duration-300">
      {/* Header */}
      <div className="flex justify-between items-start">
        <h2 className="text-xl font-semibold text-gray-800">
          {task.title}
        </h2>

        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
            task.status
          )}`}
        >
          {task.status}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-600 mt-3">
        {task.description || "No description provided."}
      </p>

      {/* Due Date */}
      <div className="flex items-center gap-2 mt-4 text-gray-500">
        <CalendarDays size={18} />
        <span>
          {task.dueDate
            ? new Date(task.dueDate).toLocaleDateString()
            : "No Due Date"}
        </span>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-6">
        <span className="text-sm font-medium text-blue-600 capitalize">
          {task.priority || "Medium"} Priority
        </span>

        <div className="flex gap-3">
          <button
            onClick={() => onEdit(task)}
            className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition"
          >
            <Pencil size={16} />
            Edit
          </button>

          <button
            onClick={() => onDelete(task._id)}
            className="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg transition"
          >
            <Trash2 size={16} />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;