import { getUsersDay } from "@/util/api/user";
import { compareDatesWithoutTime } from "@/util/helpers";
import {
  updateTaskCompletionStatusAsync,
  insertTaskAsync,
  deleteTaskAsync
} from "@/util/supabase";
import { UsersDay, Task, TaskDTO } from "@/util/types";
import { useState, useEffect } from "react";
import { Checkbox } from "../Checkbox";
import { useNewAppContext } from "@/util/context";

export default function Tasks() {
  const { user, date, isEditing, setIsEditing, usersDay, setUsersDay } =
    useNewAppContext();

  const [newTaskName, setNewTaskName] = useState<string>("");
  const [isLoadingUsersDay, setIsLoadingUsersDay] = useState<boolean>(false);
  const [isLoadingTaskAction, setIsLoadingTaskAction] =
    useState<boolean>(false);

  const numTotalTasks = usersDay?.tasks?.length as number;
  const numTasksCompleted = usersDay?.tasks?.filter(
    (t) => t.is_completed
  ).length;

  const handleUpdateTask = async (
    e:
      | React.ChangeEventHandler<HTMLInputElement>
      | React.MouseEvent<HTMLDivElement, MouseEvent>,
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
      display_order: (usersDay?.total_tasks as number) + 1,
      user_id: user!.id,
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
    <div className="flex flex-col w-112 space-y-10 items-center border-2 border-black sm:w-136">
      <h1>
        {numTotalTasks > 0 ? (
          <span>
            tasks {numTasksCompleted}/{numTotalTasks}
          </span>
        ) : (
          <span>no tasks for this day</span>
        )}
      </h1>
      <div onClick={() => setIsEditing(!isEditing)} className="cursor-pointer">
        <h1>edit</h1>
      </div>
      <div className="w-full grid justify-center">
        <ul className="w-full">
          {usersDay?.tasks ? (
            usersDay.tasks.map((task, i) => {
              return (
                <div
                  key={i}
                  onClick={(e) => handleUpdateTask(e, task, i)}
                  className="cursor-pointer w-full"
                >
                  <li className="w-full">
                    <span className="select-none">{task.name}</span>

                    <div className="w-5"></div>

                    <Checkbox
                      isChecked={task.is_completed}
                      onChange={(
                        e: React.ChangeEventHandler<HTMLInputElement>
                      ) => handleUpdateTask(e, task, i)}
                    />

                    {isEditing && (
                      <>
                        <button
                          onClick={(e) => deleteTaskFromUsersDay(e, task, i)}
                        >
                          - delete
                        </button>
                      </>
                    )}
                  </li>
                </div>
              );
            })
          ) : (
            <div>loading maybe</div>
          )}
        </ul>
      </div>
      <div>
        <input
          placeholder="drink water"
          name="test"
          value={newTaskName}
          onChange={handleNewTaskNameChange}
        />
        <button onClick={async (e) => addNewTaskToUsersDay(e, newTaskName)}>
          add task
        </button>
      </div>
    </div>
  );
}
