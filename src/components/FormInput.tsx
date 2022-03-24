import { ChangeEvent } from 'react';

interface FormInputProps {
  label: string;
  type: 'text' | 'number';
  placeholder: string;
  min?: number;
  value: string | number | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function FormInput({
  label,
  type,
  placeholder,
  min,
  value,
  onChange,
}: FormInputProps): JSX.Element {
  return (
    <div className="form__labeledBox">
      <label htmlFor={label} className="form__label start">
        {label}
      </label>
      <input
        onChange={onChange}
        value={value}
        type={type}
        id={label}
        placeholder={placeholder}
        min={min}
        required
        className="form__input"
      />
    </div>
  );
}

export default FormInput;
