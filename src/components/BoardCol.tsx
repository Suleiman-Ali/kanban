import BoardColHeading from './BoardColHeading';
import BoardColBody from './BoardColBody';
import { colors, Task } from '../data';
import { DragEventHandler, useContext } from 'react';
import Context from '../context';

interface BoardColProps {
  label: string;
  color: string;
  colTasks: Task[];
}

function BoardCol({ label, color, colTasks }: BoardColProps): JSX.Element {
  const { droppedHandler } = useContext(Context);
  const dragOverHandler: DragEventHandler = (e) => e.preventDefault();
  const dragDropHandler: DragEventHandler = () => droppedHandler(label);

  return (
    <div
      className="board__col"
      onDragOver={dragOverHandler}
      onDrop={dragDropHandler}
    >
      <BoardColHeading label={label} color={color} count={colTasks.length} />
      <BoardColBody tasks={colTasks} />
    </div>
  );
}

export default BoardCol;
