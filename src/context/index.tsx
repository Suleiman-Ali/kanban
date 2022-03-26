import uniqid from 'uniqid';
import React, { ReactNode, useEffect, useState } from 'react';
import { Task } from '../data';
import { stringify } from 'querystring';

interface ContextProviderProps {
  children: ReactNode;
}

interface ContextProps {
  tasks: Task[];
  taskToEdit: Task | undefined;
  addTask: (
    name: string,
    time: string,
    timeUnit: string,
    priority: string,
    state: string
  ) => void;
  deleteTask: (task: Task) => void;
  editTask: (task: Task) => void;
}

const Context = React.createContext<ContextProps>(undefined!);

export function ContextProvider({
  children,
}: ContextProviderProps): JSX.Element {
  const [tasks, setTasks] = useState<Task[]>(
    JSON.parse(localStorage.getItem('tasks') as string)
  );
  const [taskToEdit, setTaskToEdit] = useState<Task | undefined>(undefined);

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

  const deleteTask = (task: Task) => {
    setTasks((tasks) => tasks.filter((t) => t.id !== task.id));
  };

  const editTask = (task: Task) => {
    setTaskToEdit(task);
    deleteTask(task);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Context.Provider
      value={{ tasks, addTask, deleteTask, editTask, taskToEdit }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
