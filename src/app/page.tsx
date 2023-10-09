"use client";
import Goals from "@/components/goals/Goals";
import Habits from "@/components/habits/Habits";
import Navigation from "@/components/navigation/Navigation";
import Tasks from "@/components/tasks/Tasks";
import { ReactNode } from "react";

type ContentProps = {
  children: ReactNode;
};
const Content = ({ children }: ContentProps) => {
  return <div className="grid justify-center m-5">{children}</div>;
};

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <div className="flex flex-col w-full">
        <Navigation />

        <Content>
          <Habits />
          <Tasks />
          <Goals />
        </Content>
      </div>
    </div>
  );
}
