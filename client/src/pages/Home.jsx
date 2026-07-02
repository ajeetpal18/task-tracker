import { useEffect, useState } from "react";
import api from "../api/api";
import CreateTask from "../components/CreateTask";
import TaskList from "../components/TaskList";

const Home = () => {
  const [tasks, setTasks] = useState([]);

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

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mt-10">
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
};

export default Home;
