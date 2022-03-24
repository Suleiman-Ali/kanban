import TaskComponent from './Task';
import { Task } from '../data';
import BoardColHeading from './BoardColHeading';
import BoardColBody from './BoardColBody';

interface BoardColProps {
  label: string;
  color: string;
  colTasks: Task[];
}

function BoardCol({ label, color, colTasks }: BoardColProps): JSX.Element {
  return (
    <div className="board__col">
      <BoardColHeading label={label} color={color} count={colTasks.length} />
      <BoardColBody tasks={colTasks} />
    </div>
  );
}

export default BoardCol;
