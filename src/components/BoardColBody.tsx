import TaskComponent from './Task';
import { Task } from '../data';

interface BoardColBodyProps {
  tasks: Task[];
}

function BoardColBody({ tasks }: BoardColBodyProps): JSX.Element {
  return (
    <div className="board__colBody">
      {tasks.map((task) => (
        <TaskComponent task={task} key={task.id} />
      ))}
    </div>
  );
}

export default BoardColBody;
