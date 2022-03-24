import { Task } from '../data';

interface TaskHeadingProps {
  task: Task;
}

function TaskHeading({ task }: TaskHeadingProps): JSX.Element {
  return (
    <div className="task__heading">
      <p className="task__name">{task.name}</p>
      <div className="task__icons">
        <i className="bi bi-pencil-square task__icon"></i>
        <i className="bi bi-x-circle task__icon"></i>
      </div>
    </div>
  );
}

export default TaskHeading;
