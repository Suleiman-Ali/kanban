import { ChangeEvent } from 'react';

interface FormInputProps {
  label: string;
  type: 'text' | 'number';
  placeholder: string;
  value: string | number | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
  maxLength?: number;
}

function FormInput({
  label,
  type,
  placeholder,
  min,
  max,
  maxLength,
  value,
  onChange,
}: FormInputProps): JSX.Element {
  return (
    <div className="form__labeledBox">
      <label htmlFor={label} className="form__label start">
        {label}
      </label>
      <input
        maxLength={maxLength}
        onChange={onChange}
        value={value}
        type={type}
        id={label}
        placeholder={placeholder}
        min={min}
        max={max}
        required
        className="form__input"
      />
    </div>
  );
}

export default FormInput;
