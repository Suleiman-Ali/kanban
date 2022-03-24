interface BoardColHeadingProps {
  label: string;
  color: string;
  count: number;
}

function BoardColHeading({
  label,
  color,
  count,
}: BoardColHeadingProps): JSX.Element {
  return (
    <div className="board__colHeading">
      <div className="board__colHeadingLeft">
        <div className="board__icon" style={{ backgroundColor: color }}></div>
        <p className="board__heading">{label}</p>
      </div>

      <div className="board__colHeadingRight">
        <p className="board__count" style={{ color: color }}>
          Tasks Count: {count}
        </p>
      </div>
    </div>
  );
}
export default BoardColHeading;
