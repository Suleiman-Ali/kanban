import uniqid from 'uniqid';
import React, { ReactNode, useState } from 'react';
import { Task } from '../data';

interface ContextProviderProps {
  children: ReactNode;
}

interface ContextProps {
  tasks: Task[];
  addTask: (
    name: string,
    time: string,
    timeUnit: string,
    priority: string,
    state: string
  ) => void;
}

const Context = React.createContext<ContextProps>(undefined!);

export function ContextProvider({
  children,
}: ContextProviderProps): JSX.Element {
  // prettier-ignore
  const [tasks, setTasks] = useState<Task[]>([
      {id: "1", name: "Hello A", time: "3", priority: "LOW", state: "TO DO", timeUnit: "MIN"},
      {id: "2", name: "Hello B", time: "4", priority: "MID", state: "DOING", timeUnit: "HOUR"},
      {id: "3", name: "Hello C", time: "5", priority: "HIGH", state: "DONE", timeUnit: "DAY"},
      {id: "4", name: "Hello D", time: "6", priority: "LOW", state: "TO DO", timeUnit: "MONTH"},
      {id: "5", name: "Hello E", time: "7", priority: "MID", state: "DOING", timeUnit: "YEAR"},
      {id: "6", name: "Hello F", time: "8", priority: "HIGH", state: "DONE", timeUnit: "MIN"},
  ]);

  const addTask = (
    name: string,
    time: string,
    timeUnit: string,
    priority: string,
    state: string
  ) => {
    const task = { id: uniqid(), name, time, timeUnit, priority, state };
    setTasks((tasks) => [task, ...tasks]);
  };

  return (
    <Context.Provider value={{ tasks, addTask }}>{children}</Context.Provider>
  );
}

export default Context;
