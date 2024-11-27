import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import tasks from "./db/tasks";

const fiterCurrentTasks = () =>
  tasks.filter(
    (task) => task.state === "backlog" || task.state === "in_progress"
  );

const filterCompletedTasks = () =>
  tasks.filter((task) => task.state === "completed");

const renderCurrentTasks = () => {
  const currentTasks = fiterCurrentTasks();
  return (
    <>
      <h2>Current Tasks ({currentTasks.length})</h2>
      <ul>
        {currentTasks.map((task) => (
          <ul>
            <li key={task.id}>
              <b>{task.title}</b>
              <span className="status-label text-white py-1 px-2 ms-2">
                {task.state}
              </span>
            </li>
            <li>Priority: {task.priority}</li>
            <li>Est. Time: {task.estimatedTime}</li>
          </ul>
        ))}
      </ul>
    </>
  );
};

const renderCompletedTasks = () => {
  const currentTasks = filterCompletedTasks();
  return (
    <>
      <h2>Completed Tasks ({currentTasks.length})</h2>
      <ul>
        {currentTasks.map((task) => (
          <ul>
            <li key={task.id}>
              <b>{task.title}</b>
              <span className="status-label text-white py-1 px-2 ms-2">
                {task.state}
              </span>
            </li>
            <li>Priority: {task.priority}</li>
            <li>Est. Time: {task.estimatedTime}</li>
          </ul>
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
          <h1>Task Manager</h1>
        </header>
        <main className="p-3">
          {renderCurrentTasks()}
          <hr />
          {renderCompletedTasks()}
        </main>
      </div>
    </>
  );
}

export default App;
