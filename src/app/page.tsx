"use client";
import { useState } from "react";

type Task = {
  id: number;
  name: string;
  isCompleted: boolean;
};
type UserDay = {
  id: number;
  userId: number;
  date: Date | string;
  tasks: Task[];
};

type User = {
  id: number;
  username: string;
};

const today = new Date();
const sampleTasks: Task[] = [
  { id: 1, name: "eat breakfast", isCompleted: false }
];
const sampleData: UserDay[] = [
  {
    id: 1,
    userId: 1,
    date: today.toISOString().slice(0, 10),
    tasks: sampleTasks
  }
];

export default function Home() {
  const [counter, setCounter] = useState(0);
  const [tasks, setTasks] = useState(sampleTasks);

  const handleUpdateTask = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    const oldTasks = [...tasks];
    const updatedTask = oldTasks[index];
    updatedTask.isCompleted = !oldTasks[index].isCompleted;

    oldTasks[index] = updatedTask;
    setTasks(oldTasks);
  };

  return (
    <div className="flex w-full flex-col">
      <div className="flex h-screen flex-col">
        <h1>tasks</h1>
        <ul>
          {tasks.map((task, i) => {
            return (
              <div key={i}>
                <li>
                  <span className={`${task.isCompleted && "line-through"}`}>
                    {task.name}
                  </span>
                  - {task.isCompleted.toString()}
                </li>
                <button onClick={(e) => handleUpdateTask(e, i)}>update</button>
              </div>
            );
          })}
        </ul>
      </div>

      <p className="break-all"></p>
    </div>
  );
}
