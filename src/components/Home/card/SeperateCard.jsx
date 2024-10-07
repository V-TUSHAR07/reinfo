import React, { useState } from "react";
import "./cards.css"; // Optional: Add your custom styles here

const SeperateCard = () => {
  const [tasks, setTasks] = useState({ inProgress: [], done: [], Todo: [] });
  const [taskDetails, setTaskDetails] = useState({
    taskName: "",
    taskDesc: "",
    startDate: "",
    endDate: "",
    status: "Pending",
    editId: null,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskDetails((prev) => ({ ...prev, [name]: value }));
  };

  const addOrUpdateTask = (e) => {
    e.preventDefault();
    const { taskName, taskDesc, startDate, endDate, status, editId } =
      taskDetails;

    const newTask = {
      id: editId || Date.now(),
      taskName,
      taskDesc,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      duration: calculateDuration(new Date(startDate), new Date(endDate)),
      status,
    };

    setTasks((prev) => {
      const updatedTasks = { ...prev };
      if (editId) {
        const originalColumn = Object.keys(prev).find((key) =>
          prev[key].some((task) => task.id === editId)
        );
        updatedTasks[originalColumn] = updatedTasks[originalColumn].filter(
          (task) => task.id !== editId
        );
      }

      const targetColumn =
        newTask.status === "Completed"
          ? "done"
          : newTask.status === "In Progress"
          ? "inProgress"
          : "Todo";

      updatedTasks[targetColumn] = updatedTasks[targetColumn].filter(
        (task) => task.id !== newTask.id
      );
      updatedTasks[targetColumn].push(newTask);
      return updatedTasks;
    });

    resetForm();
    setIsModalOpen(false);
  };

  const resetForm = () => {
    setTaskDetails({
      taskName: "",
      taskDesc: "",
      startDate: "",
      endDate: "",
      status: "Pending",
      editId: null,
    });
  };

  const calculateDuration = (start, end) => {
    const durationInMs = end - start;
    const durationInHours = Math.floor(durationInMs / (1000 * 60 * 60));
    const durationInMinutes = Math.floor(
      (durationInMs % (1000 * 60 * 60)) / (1000 * 60)
    );
    return `${durationInHours} hrs ${durationInMinutes} mins`;
  };

  const startEditTask = (task) => {
    setTaskDetails({
      taskName: task.taskName,
      taskDesc: task.taskDesc,
      startDate: task.startDate.toISOString().split("T")[0],
      endDate: task.endDate.toISOString().split("T")[0],
      status: task.status,
      editId: task.id,
    });
    setIsModalOpen(true);
  };

  const deleteTask = (id, column) => {
    setTasks((prev) => ({
      ...prev,
      [column]: prev[column].filter((task) => task.id !== id),
    }));
  };

  const changeTaskStatus = (task, newStatus) => {
    setTasks((prev) => {
      const originalColumn = Object.keys(prev).find((key) =>
        prev[key].some((t) => t.id === task.id)
      );
      const updatedTasks = { ...prev };
      updatedTasks[originalColumn] = updatedTasks[originalColumn].filter(
        (t) => t.id !== task.id
      );

      const updatedTask = { ...task, status: newStatus };
      const targetColumn =
        newStatus === "Completed"
          ? "done"
          : newStatus === "In Progress"
          ? "inProgress"
          : "Todo";

      updatedTasks[targetColumn] = updatedTasks[targetColumn].filter(
        (t) => t.id !== updatedTask.id
      );
      updatedTasks[targetColumn].push(updatedTask);

      return updatedTasks;
    });
  };

  return (
    <div className="flex space-x-4 p-4">
      <div className="flex space-x-8 p-8 bg-gray-900 min-h-screen">
  {["Todo", "inProgress", "done"].map((column) => (
    <div
      key={column}
      className="bg-gray-800 w-1/3 rounded-xl p-6 shadow-xl border border-gray-700"
    >
      <h3 className="font-bold text-lg mb-4 text-gray-200 tracking-wider uppercase">
        {column === "Todo"
          ? "To Do"
          : column === "inProgress"
          ? "In Progress"
          : "Completed"}
      </h3>

      {column === "Todo" && (
        <div className="border border-dashed border-gray-600 p-4 mb-5 rounded-lg bg-gray-700 hover:bg-gray-600 transition duration-200">
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-blue-400 text-base hover:text-blue-300 font-semibold"
          >
            + Create Task
          </button>
        </div>
      )}

      {tasks[column].map((task) => (
        <div
          key={task.id}
          className="bg-gray-700 border border-gray-600 rounded-xl p-5 mb-4 shadow-md transition duration-300 hover:shadow-lg"
        >
          <h4 className="font-semibold text-gray-100 text-lg mb-2">
            {task.taskName}
          </h4>
          <p className="text-gray-400 text-sm mb-2">{task.taskDesc}</p>
          <p className="text-gray-500 text-xs mb-1">
            Duration: {task.duration}
          </p>
          <p className="text-gray-500 text-xs">Status: {task.status}</p>

          <div className="flex justify-between items-center mt-4 space-x-6 text-sm">
            {column !== "done" && (
              <button
                onClick={() => startEditTask(task)}
                className="text-yellow-400 hover:text-yellow-300 font-medium transition"
              >
                Edit
              </button>
            )}
            <button
              onClick={() => deleteTask(task.id, column)}
              className="text-red-500 hover:text-red-400 font-medium transition"
            >
              Delete
            </button>
            {column === "Todo" && (
              <button
                onClick={() => changeTaskStatus(task, "In Progress")}
                className="text-blue-400 hover:text-blue-300 font-medium transition"
              >
                Start
              </button>
            )}
            {column === "inProgress" && (
              <button
                onClick={() => changeTaskStatus(task, "Completed")}
                className="text-green-400 hover:text-green-300 font-medium transition"
              >
                Complete
              </button>
            )}
          </div>
        </div>
      ))}

      {tasks[column].length === 0 && (
        <p className="text-gray-500 text-base">No tasks available</p>
      )}
    </div>
  ))}
</div>


      {/* Modal for adding/updating tasks */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center">
          <div className="bg-black text-white p-8 rounded-lg max-w-md w-full mx-auto shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-5">
              {taskDetails.editId ? "Edit Task" : "Add Task"}
            </h2>
            <form onSubmit={addOrUpdateTask} className="space-y-4">
              {["taskName", "taskDesc", "startDate", "endDate"].map(
                (field, index) => (
                  <input
                    key={field}
                    type={field.includes("Date") ? "date" : "text"}
                    name={field}
                    className="bg-gray-800 border border-gray-700 text-white p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={taskDetails[field]}
                    onChange={handleChange}
                    placeholder={field.replace(/([A-Z])/g, " $1").trim()}
                    required
                  />
                )
              )}
              <select
                name="status"
                className="bg-gray-800 border border-gray-700 text-white p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                value={taskDetails.status}
                onChange={handleChange}
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-red-600 text-white p-2 rounded-md hover:bg-red-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-600 text-white p-2 rounded-md hover:bg-green-500"
                >
                  {taskDetails.editId ? "Update Task" : "Add Task"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeperateCard;
