import Task from "../model/task.js";

// Create Task
export const createTask = async (req, res) => {
  try {
    const { title, description, status, priority, dueDate } = req.body;

    // Check required fields
    if (!title || !dueDate) {
      return res.status(400).json({
        success: false,
        message: "Title and Due Date are required.",
      });
    }

    // Validate due date
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const selectedDate = new Date(dueDate);
    selectedDate.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      return res.status(400).json({
        success: false,
        message: "Due date cannot be in the past.",
      });
    }

    const task = await Task.create({
      user: req.user.id,
      title,
      description,
      status,
      priority,
      dueDate,
});

    res.status(201).json({
      success: true,
      message: "Task created successfully.",
      data: task,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getAllTasks = async (req, res) => {
  try {
    console.log(req.user);

    const tasks = await Task.find({
      user: req.user.id,
    }).sort({ createdAt: -1 });

    console.log(tasks);

    res.status(200).json({
      success: true,
      count: tasks.length,
      data: tasks,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// export const getAllTasks = async (req, res) => {
//   try {
//    const tasks = await Task.find({
//     user: req.user.id,
// }).sort({
//     createdAt: -1,
// });

//     res.status(200).json({
//       success: true,
//       count: tasks.length,
//       data: tasks,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };
export const getTaskById = async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    res.status(200).json({
      success: true,
      data: task,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.user.id,
      },
      {
        $set: req.body,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found.",
      });
    }

    res.status(200).json({
      success: true,
      data: task,
      message: "Task updated successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Task deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};