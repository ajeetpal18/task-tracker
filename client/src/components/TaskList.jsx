import TaskCard from "./TaskCard";

const TaskList = ({ tasks = [], onEdit, onDelete }) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-10">
          Create your first task to get started.
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {tasks.map((task) => (
       <TaskCard
  key={task._id}
  task={task}
  onEdit={onEdit}
  onDelete={onDelete}
/>
      ))}
    </div>
  );
};

export default TaskList;