import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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
          <li key={task.id}>
            <ul>
              <li>
                <b>{task.title}</b>
              </li>
            </ul>
            <ul>
              <li>Priority: {task.priority}</li>
            </ul>
            <ul>
              <li>Est. Time: {task.estimatedTime}</li>
            </ul>
          </li>
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
          <li key={task.id}>
            <ul>
              <li>
                <b>{task.title}</b>
              </li>
            </ul>
            <ul>
              <li>Priority: {task.priority}</li>
            </ul>
            <ul>
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
      <header className="page-header">
        <h1>Task Manager</h1>
      </header>
      <main>
        {renderCurrentTasks()}
        <hr />
        {renderCompletedTasks()}
      </main>
    </>
  );
}

export default App;
