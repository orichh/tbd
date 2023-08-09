"use client";
import { initializeNewUser } from "@/util/api/user";
import { getUsersDay } from "@/util/supabase";
import { UsersDay } from "@/util/types";
import { useEffect, useState } from "react";

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
  const [usersDay, setUsersDay] = useState<UsersDay | null>(null);
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    (async () => {
      const test = await getUsersDay(
        "1cedcf8d-c6d3-45ac-b724-e83d24d0509d",
        date
      );

      setUsersDay(test);
    })();
  }, [date]);

  useEffect(() => {
    console.log("🚀 ~ file: page.tsx:59 ~ Home ~ usersDay:", usersDay);
  }, [usersDay]);

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
        <button
          onClick={async () => {
            // alert("hit");
            const response = await initializeNewUser(
              "1cedcf8d-c6d3-45ac-b724-e83d24d0509d"
            );
            if (response) {
              alert("success");
            } else {
              alert("failed");
            }
          }}
        >
          initialize user dayssss
        </button>
        <h1>tasks</h1>
        <ul>
          {usersDay?.tasks.map((task, i) => {
            return (
              <div key={i}>
                <li>
                  <span className={`${task.is_completed && "line-through"}`}>
                    {task.name}
                  </span>
                  - {task.is_completed.toString()}
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
