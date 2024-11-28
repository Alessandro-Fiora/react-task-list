import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import tasks from "./db/tasks";

const getStatusColor = (task) => {
  let statusColor;
  if (task.state === "backlog") statusColor = "red";
  else if (task.state === "in_progress") statusColor = "orange";
  else statusColor = "green";

  return statusColor;
};

const pendingTasks = tasks.filter(
  (task) => task.state === "backlog" || task.state === "in_progress"
);

const completedTasks = tasks.filter((task) => task.state === "completed");

const renderTasks = (currentTasks) => {
  return (
    <>
      <ul>
        {currentTasks.map((task) => (
          <li key={task.id}>
            <ul>
              <li>
                <b>{task.title}</b>
                <span
                  className="d-inline-block rounded-1 status-label text-white py-1 px-2 ms-2"
                  style={{ backgroundColor: getStatusColor(task) }}
                >
                  {task.state}
                </span>
              </li>
              <li>Priority: {task.priority}</li>
              <li>Est. Time: {task.estimatedTime}</li>
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};

function App() {
  return (
    <>
      <div className="wrapper">
        <header className="page-header p-3">
          <div className="container">
            <h1>Task Manager</h1>
          </div>
        </header>
        <main className="p-3">
          <div className="container">
            <h2 className="h4 py-2">Pending Tasks ({pendingTasks.length})</h2>
            {renderTasks(pendingTasks)}
            <hr />
            <h2 className="h4 py-2">
              Completed Tasks ({completedTasks.length})
            </h2>
            {renderTasks(completedTasks)}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
