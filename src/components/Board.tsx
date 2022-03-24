import Context from '../context';
import BoardCol from './BoardCol';
import { useContext } from 'react';
import { colors } from '../data';

function Board(): JSX.Element {
  const { tasks } = useContext(Context);
  const todoTasks = tasks.filter((task) => task.state === 'TO DO');
  const doingTasks = tasks.filter((task) => task.state === 'DOING');
  const doneTasks = tasks.filter((task) => task.state === 'DONE');

  return (
    //   prettier-ignore
    <div className="board">
      <BoardCol label="TO DO"  color={colors[2]} colTasks={todoTasks}/>
      <BoardCol label="DOING"  color={colors[1]} colTasks={doingTasks}/>
      <BoardCol label="DONE"  color={colors[4]} colTasks={doneTasks}/>
    </div>
  );
}

export default Board;
