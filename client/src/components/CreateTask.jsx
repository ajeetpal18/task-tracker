import api from "../api/api";
import { useNavigate } from "react-router-dom";
const TaskForm = ({ fetchTasks }) => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const task = {
      title: formData.get("title").trim(),
      description: formData.get("description").trim(),
      status: formData.get("status"),
      priority: formData.get("priority"),
      dueDate: formData.get("dueDate"),
    };

    // Validation
    if (!task.title) {
      alert("Title is required.");
      return;
    }

    if (task.title.length < 3) {
      alert("Title must be at least 3 characters.");
      return;
    }

    if (!task.dueDate) {
      alert("Please select a due date.");
      return;
    }

    try {
      const response = await api.post("/tasks/add", task);

      if (response.status === 201 || response.status === 200) {
        alert("✅ Task created successfully!");

        // Clear the form
        e.target.reset();

        // Refresh task list
        if (fetchTasks) {
          fetchTasks();
        }

        // Navigate to the task list page
        navigate("/");
      }
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message || "Failed to create task."
      );
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">
        Create New Task
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Title
          </label>

          <input
            type="text"
            name="title"
            placeholder="Enter task title"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Description
          </label>

          <textarea
            name="description"
            rows="4"
            placeholder="Enter task description"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Status & Priority */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Status
            </label>

            <select
              name="status"
              defaultValue="pending"
              className="w-full border border-gray-300 rounded-lg p-3"
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Priority
            </label>

            <select
              name="priority"
              defaultValue="medium"
              className="w-full border border-gray-300 rounded-lg p-3"
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
        </div>

        {/* Due Date */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Due Date
          </label>

          <input
          type="date"
             name="dueDate"
             min={new Date().toISOString().split("T")[0]}
         className="w-full border border-gray-300 rounded-lg p-3"
         required
        />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-300"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
