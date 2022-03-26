import { useContext } from 'react';
import Context from '../context';
import { colors, getPriorityColor, Task } from '../data';
import TaskHeading from './TaskHeading';
import TaskProperty from './TaskProperty';

interface TaskProps {
  task: Task;
}

function TaskComponent({ task }: TaskProps): JSX.Element {
  const { beingDraggedHandler } = useContext(Context);
  const dragStartHandler = () => beingDraggedHandler(task);

  return (
    <div
      draggable={true}
      onDragStart={dragStartHandler}
      className="task"
      style={{
        borderLeft: `4px solid ${getPriorityColor(task.priority)}`,
      }}
    >
      <TaskHeading task={task} />

      <div className="task__body">
        <TaskProperty label={task.time} color={colors[4]} />
        <TaskProperty label={task.timeUnit} color={colors[0]} />
        <TaskProperty label={task.priority} color={colors[1]} />
        <TaskProperty label={task.state} color={colors[2]} />
      </div>
    </div>
  );
}

export default TaskComponent;
