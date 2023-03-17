import React, { useState } from "react";
import "./App.css";
import { v1 } from "uuid";
import { ItemsReady } from "./ItemsReady";
import { BlockLog } from "./blocklog";
import { InProgress } from "./inprogress";
import { Finished } from "./finished";
import { HeaderMenu } from "./headermenu";
import { FooterMenu } from "./footer";
import { TaskPage } from "./taskpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  type Task = {
    id: string;
    item: string;
  };
  const [items, setItems] = useState<Task[]>([
    { id: v1(), item: "Sprint bugfix" },
  ]);
  const [newItems, setNewItems] = useState('');
  const [progress, setProgress] = useState<Task[]>([
    { id: v1(), item: "Auth bugfix" },
  ]);
  const [finished, setFinished] = useState<Task[]>([
    { id: v1(), item: "Main page bugfix" },
  ]);
  const [tasks, setTasks] = useState<Task[]>([
    { id: v1(), item: "Shop bug1" },
    { id: v1(), item: "Shop bug2" },
    { id: v1(), item: "Shop bug3" },
    { id: v1(), item: "Shop bug4" },
    { id: v1(), item: "Shop bug5" },
    { id: v1(), item: "Shop bug6" },
  ]);
  const readySelectTask = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const taskId = event.target.value;
    const task = items.find((task) => task.id === taskId);
    if (task === undefined) {
      return;
    }
    setItems((prevBacklog) =>
      prevBacklog.filter((item) => item.id !== task.id)
    );
    setTasks((prevReady) => [...prevReady, task]);
  };
  const inProgressSelectTask = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const taskId = event.target.value;
    const task = tasks.find((task) => task.id === taskId);
    if (task === undefined) {
      return;
    }

    setTasks((prevReady) => prevReady.filter((item) => item.id !== task.id));
    setProgress((prevProgress) => [...prevProgress, task]);
  };
  const finishedSelectTask = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const taskId = event.target.value;
    const task = progress.find((task) => task.id === taskId);
    if (task === undefined) {
      return;
    }

    setProgress((prevProgress) =>
      prevProgress.filter((item) => item.id !== task.id)
    );
    setFinished((prevFinished) => [...prevFinished, task]);
  };

  function removeTask(id: string) {
    let filteredTasks = tasks.filter((t) => t.id !== id);
    setTasks(filteredTasks);
  }

  function AddItem(title: string) {
    let newItem = {
      id: v1(),
      item: title,
    };
    let newItems = [newItem, ...items];
    setItems(newItems);
  }
  const activeTasksCount = items.length;
  const finishedTasksCount = finished.length;
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <body>
                {" "}
                <HeaderMenu></HeaderMenu>
                <div className="main">
                  <div className="kanban-board">
                    <BlockLog
                      title="Backlog"
                      text="Login page – performance issues"
                      items={items}
                      AddItem={AddItem}
                    ></BlockLog>
                    <ItemsReady
                      title="Ready"
                      text="Shop page – performance issues"
                      readySelectTask={readySelectTask}
                      tasks={tasks}
                      items={items}
                      removeTask={removeTask}
                    ></ItemsReady>
                    <InProgress
                      title="In Progress"
                      text="User page – performance issues"
                      inProgressSelectTask={inProgressSelectTask}
                      tasks={tasks}
                      progress={progress}
                    />
                    <Finished
                      title="Finished"
                      text="Main page – performance issues"
                      finishedSelectTask={finishedSelectTask}
                      progress={progress}
                      finished={finished}
                    />
                  </div>
                </div>
                <FooterMenu
                  activeTasksCount={activeTasksCount}
                  finishedTasksCount={finishedTasksCount}
                ></FooterMenu>
              </body>
            }
          />
          <Route path="/task/:task" element={<TaskPage activeTasksCount={activeTasksCount}
                  finishedTasksCount={finishedTasksCount}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
