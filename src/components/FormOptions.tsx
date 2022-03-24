import { colors } from '../data';

interface FormOptionsProps {
  label: string;
  options: string[];
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
              <p
                className="form__option"
                style={{ backgroundColor: colors[index] }}
                onClick={() => onClick(opt)}
                key={opt}
              >
                {opt}
                <i className="bi bi-check2-circle"></i>
              </p>
            );

          return (
            <p
              className="form__option"
              style={{ backgroundColor: colors[index] }}
              onClick={() => onClick(opt)}
              key={opt}
            >
              {opt}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default FormOptions;
