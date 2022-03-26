import Option from './Option';
import OptionSelected from './OptionSelected';

interface FormOptionsProps {
  options: string[];
  label: string;
  current: string;
  onClick: (opt: string) => void;
}

function FormOptions({
  label,
  options,
  current,
  onClick,
}: FormOptionsProps): JSX.Element {
  return (
    <div className="form__labeledBox">
      <label htmlFor={label} className="form__label">
        {label}
      </label>

      <div className="form__options">
        {options.map((opt, index) => {
          if (opt === current)
            return (
              <OptionSelected
                index={index}
                opt={opt}
                onClick={onClick}
                key={opt}
              />
            );
          return <Option index={index} opt={opt} onClick={onClick} key={opt} />;
        })}
      </div>
    </div>
  );
}

export default FormOptions;
