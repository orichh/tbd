"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState
} from "react";
import { Habit, User, UsersDay } from "./types";
import { getUserHabitsAsync } from "./supabase/functions/habits";
import { supabase } from "./supabase";
import { RealtimeChannel } from "@supabase/supabase-js";
import { supabaseCustomAllChannel } from "./supabase/channels";
import { getUsersDay } from "./api/user";

type AppContextType = {
  isSidebarOpen: boolean;
  setSideBarOpen: (value: any) => void;
  isPhotoCarouselModalOpen: boolean;
  setPhotoCarouselModalOpen: (value: any) => void;
  selectedImageIndex: number;
  setSelectedImageIndex: (value: number) => void;
};

export const AppContext = createContext<AppContextType>({
  isSidebarOpen: false,
  setSideBarOpen: function () {},
  isPhotoCarouselModalOpen: false,
  setPhotoCarouselModalOpen: function () {},
  selectedImageIndex: 0,
  setSelectedImageIndex: function () {}
});

type Props = {
  children?: ReactNode;
};

type NewAppContextType = {
  isEditing: boolean;
  setIsEditing: (isEditing: boolean) => void;
  user: User | null;
  setUser: any;
  habits: Habit[];
  setHabits: (habits: Habit[]) => void;
  date: Date;
  setDate: (date: Date) => void;
  isHabitModalOpen: boolean;
  setIsHabitModalOpen: (isHabitModalOpen: boolean) => void;
  usersDay: UsersDay | null;
  setUsersDay: (day: UsersDay | null) => void;
};
export const NewAppContext = createContext<NewAppContextType>({
  isEditing: false,
  setIsEditing: () => {},
  user: null,
  setUser: () => {},
  habits: [],
  setHabits: () => {},
  date: new Date(),
  setDate: () => {},
  isHabitModalOpen: false,
  setIsHabitModalOpen: () => {},
  usersDay: null,
  setUsersDay: () => {}
});

export const NewAppContextProvider = ({ children }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
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
  const [habits, setHabits] = useState<Habit[]>([]);
  const [date, setDate] = useState<Date>(new Date()); // default is today
  const [isHabitModalOpen, setIsHabitModalOpen] = useState(false);
  const [usersDay, setUsersDay] = useState<UsersDay | null>(null);

  // get habits
  useEffect(() => {
    (async () => {
      const data = await getUserHabitsAsync(user.id);
      console.log("🚀 ~ file: context.tsx:75 ~ data:", data);

      if (!data) {
        return;
      }

      setHabits(data);
    })();
  }, [user.id]);

  useEffect(() => {
    (async () => {
      const data = await getUsersDay(user!.id, date);
      setUsersDay(data);
    })();
  }, [date, user]);

  useEffect(() => {
    const Habits = supabaseCustomAllChannel
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "Habits" },
        (payload) => {
          console.log(
            "🚀 ~ file: context.tsx:98 ~ useEffect ~ payload:",
            payload
          );

          // TODO: this is super lazy
          (async () => {
            const data = await getUserHabitsAsync(user.id);

            if (!data) {
              return;
            }

            setHabits(data);
          })();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(supabaseCustomAllChannel);
    };
  }, []);

  return (
    <NewAppContext.Provider
      value={{
        isEditing,
        setIsEditing,
        user,
        setUser,
        habits,
        setHabits,
        date,
        setDate,
        isHabitModalOpen,
        setIsHabitModalOpen,
        usersDay,
        setUsersDay
      }}
    >
      {children}
    </NewAppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
export const useNewAppContext = () => useContext(NewAppContext);
