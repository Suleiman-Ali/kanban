import { colors } from '../data';

interface OptionProps {
  index: number;
  opt: string;
  onClick: (opt: string) => void;
}

function Option({ index, opt, onClick }: OptionProps): JSX.Element {
  return (
    <p
      className="form__option"
      style={{ backgroundColor: colors[index] }}
      onClick={() => onClick(opt)}
    >
      {opt}
    </p>
  );
}

export default Option;
