import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";
import TaskList from "../components/TaskList";
import Features from "../components/Features";
import Stats from "../components/Stats";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useAuth } from "../context/AuthContext";
const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const fetchTasks = async () => {
    try {
      const response = await api.get("/tasks/get");
      setTasks(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // Delete Task
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/tasks/delete/${id}`);

      alert("Task deleted successfully.");

      fetchTasks();
    } catch (error) {
      alert(error.response?.data?.message || "Delete failed.");
    }
  };

  // Edit Task
  const handleEdit = (task) => {
    //navigate to edit page with task id
    navigate(`/update-task/${task._id}`);
    console.log(task);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-4xl font-bold text-gray-800">
            Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Manage all your tasks from one place.
          </p>
        </div>
        <div className="flex gap-4 m-3 p-3 h-10 w-40 bg-red-600">
          <Link
            to="/create-task"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
          >
            + New Task
          </Link>
          <button
            onClick={() => {
              logout();
              navigate("/");
            }}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg"
          >
            Logout
          </button>
        </div>
        <Link
          to="/create-task"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          + New Task
        </Link>
        <button
          onClick={() => {
            logout();
            navigate("/");
          }}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg"
        >
          Logout
        </button>
      </div>

      {/* Task List */}
      <TaskList
        tasks={tasks}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <Features />
      <Stats />
    </div>
  );
};

export default Dashboard;