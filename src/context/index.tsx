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
  const [tasks, setTasks] = useState<Task[]>([]);

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
