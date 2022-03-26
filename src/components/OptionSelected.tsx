import { colors } from '../data';

interface OptionSelectedProps {
  index: number;
  opt: string;
  onClick: (opt: string) => void;
}

function OptionSelected({
  index,
  opt,
  onClick,
}: OptionSelectedProps): JSX.Element {
  return (
    <p
      className="form__option"
      style={{ backgroundColor: colors[index] }}
      onClick={() => onClick(opt)}
    >
      {opt}
      <i className="bi bi-check2-circle"></i>
    </p>
  );
}

export default OptionSelected;
