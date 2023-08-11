"use client";
import { getUsersDay, initializeNewUser } from "@/util/api/user";
import { compareDatesWithoutTime, removeItem } from "@/util/helpers";
import {
  deleteTaskAsync,
  insertTaskAsync,
  updateTaskCompletionStatusAsync
} from "@/util/supabase";
import { Task, TaskDTO, User, UsersDay } from "@/util/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState<User>({
    id: "1cedcf8d-c6d3-45ac-b724-e83d24d0509d",
    updated_at: new Date(),
    username: "richard",
    full_name: "richard",
    avatar_url: "",
    win_streak_current: 0,
    win_streak_longest: 0,
    lose_streak_current: 0,
    lose_streak_longest: 0
  });
  const [usersDay, setUsersDay] = useState<UsersDay | null>(null);
  const [date, setDate] = useState<Date>(new Date());
  const [newTaskName, setNewTaskName] = useState<string>("");
  const [isLoadingUsersDay, setIsLoadingUsersDay] = useState<boolean>(false);
  const [isLoadingTaskAction, setIsLoadingTaskAction] =
    useState<boolean>(false);
  const today = new Date();
  const numTotalTasks = usersDay?.tasks?.length as number;
  const numTasksCompleted = usersDay?.tasks.filter(
    (t) => t.is_completed
  ).length;

  useEffect(() => {
    (async () => {
      setIsLoadingUsersDay(true);
      const test = await getUsersDay(user?.id, date);
      setUsersDay(test);
      setIsLoadingUsersDay(false);
    })();
  }, [date, user.id]);

  const handleUpdateTask = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    task: Task,
    index: number
  ) => {
    setIsLoadingTaskAction(true);
    const { data, error } = await updateTaskCompletionStatusAsync(
      task.id,
      !task.is_completed
    );

    if (error) {
      alert("error inserting task");
    } else {
      updateTaskInListState(data as Task, index);
    }

    setIsLoadingTaskAction(false);
  };

  useEffect(() => {
    console.log("🚀 ~ file: page.tsx:46 ~ Home ~ usersDay:", usersDay);
  }, [usersDay]);

  const addNewTaskToUsersDay = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    taskName: string
  ) => {
    if (taskName === "") {
      return;
    }

    const taskToInsert: TaskDTO = {
      name: taskName,
      is_completed: false,
      time_spent_in_minutes_actual: 0,
      time_spent_in_minutes_estimate: 0,
      completed_at: null,
      notes: "",
      display_order: (usersDay?.tasks.length as number) + 1,
      user_id: user.id,
      associated_day_id: usersDay?.id as number
    };

    const { data, error } = await insertTaskAsync(taskToInsert);
    if (error) {
      alert("error inserting task");
    } else {
      setNewTaskName("");
      addToTaskListState(data as Task);
    }
  };

  const deleteTaskFromUsersDay = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    task: Task,
    index: number
  ) => {
    try {
      setIsLoadingTaskAction(true);
      const { data, error } = await deleteTaskAsync(task.id);
      if (error) {
        alert("error deleting task");
      } else {
        deleteTaskInListState(task, index);
      }
    } finally {
      setIsLoadingTaskAction(false);
    }
  };

  const addToTaskListState = (task: Task) => {
    const updatedUsersDay = { ...(usersDay as UsersDay) };
    updatedUsersDay.tasks = [...(updatedUsersDay?.tasks as Task[]), task];

    setUsersDay(updatedUsersDay);
  };

  const updateTaskInListState = (task: Task, index: number) => {
    const updatedUsersDay = { ...(usersDay as UsersDay) };
    updatedUsersDay.tasks = [...(updatedUsersDay?.tasks as Task[])];
    updatedUsersDay.tasks[index] = task;

    setUsersDay(updatedUsersDay);
  };

  const deleteTaskInListState = (task: Task, index: number) => {
    const updatedUsersDay = { ...(usersDay as UsersDay) };
    updatedUsersDay.tasks = updatedUsersDay?.tasks.filter(
      (t) => t.id !== task.id
    );

    setUsersDay(updatedUsersDay);
  };

  const handleNewTaskNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskName(e.target.value);
  };

  return (
    <div className="flex w-full flex-col">
      {isLoadingUsersDay ? (
        <div>loading</div>
      ) : (
        <div className="flex h-screen flex-col">
          <div>
            <button
              onClick={() => {
                const newDate: Date = new Date();
                newDate.setDate(date.getDate() - 1);

                setDate(newDate);
              }}
            >
              previous
            </button>
            <h1>{date.toDateString()}</h1>
            <button
              onClick={() => {
                const newDate: Date = new Date();
                newDate.setDate(date.getDate() + 1);

                setDate(newDate);
              }}
            >
              next
            </button>
          </div>

          <button
            onClick={async () => {
              const response = await initializeNewUser(user.id);
              if (response) {
                alert("success");
              } else {
                alert("failed");
              }
            }}
          >
            initialize user days
          </button>

          <h1>
            {numTotalTasks > 0 ? (
              <span>
                tasks {numTasksCompleted}/{numTotalTasks}
              </span>
            ) : (
              <span>no tasks for this day</span>
            )}
          </h1>

          <ul>
            {usersDay?.tasks.map((task, i) => {
              return (
                <div key={i}>
                  <li>
                    {task.display_order} -
                    <span className={`${task.is_completed && "line-through"}`}>
                      {task.name}
                    </span>
                    - {task.is_completed.toString()}
                    <button onClick={(e) => handleUpdateTask(e, task, i)}>
                      update
                    </button>
                    <button onClick={(e) => deleteTaskFromUsersDay(e, task, i)}>
                      delete
                    </button>
                  </li>
                </div>
              );
            })}
          </ul>

          {compareDatesWithoutTime(date, today) === -1 ? null : (
            <div>
              <input
                placeholder="drink water"
                name="test"
                value={newTaskName}
                onChange={handleNewTaskNameChange}
              />
              <button
                onClick={async (e) => addNewTaskToUsersDay(e, newTaskName)}
              >
                add task: {newTaskName}
              </button>
            </div>
          )}
        </div>
      )}

      <p className="break-all"></p>
    </div>
  );
}
