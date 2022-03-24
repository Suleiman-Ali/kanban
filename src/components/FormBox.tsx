import { ReactNode } from 'react';

interface FormBoxProps {
  children: ReactNode;
}

function FormBox({ children }: FormBoxProps): JSX.Element {
  return <div className="form__box">{children}</div>;
}

export default FormBox;
