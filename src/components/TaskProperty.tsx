interface TaskPropertyProps {
  color: string;
  label: string;
}

function TaskProperty({ label, color }: TaskPropertyProps): JSX.Element {
  return (
    <p className="task__property" style={{ backgroundColor: color }}>
      {label}
    </p>
  );
}

export default TaskProperty;
