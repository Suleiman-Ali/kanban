import FormInput from './FormInput';
import FormOptions from './FormOptions';
import FormBox from './FormBox';
import Context from '../context';
import {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useContext,
  useState,
} from 'react';
import { priorities, states, timeUnits } from '../data/index';

function Form(): JSX.Element {
  const { addTask } = useContext(Context);
  const [timeUnit, setTimeUnit] = useState<string>(timeUnits[0]);
  const [priority, setPriority] = useState<string>(priorities[0]);
  const [state, setState] = useState<string>(states[0]);
  const [name, setName] = useState<string>('');
  const [time, setTime] = useState<string>('');

  const clearForm = () => {
    setTimeUnit(timeUnits[0]);
    setPriority(priorities[0]);
    setState(states[0]);
    setName('');
    setTime('');
  };

  //   prettier-ignore
  const nameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  //   prettier-ignore
  const timeChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setTime(e.target.value)
  //   prettier-ignore
  const timeUnitChangeHandler = (timeUnit:string) =>  setTimeUnit(timeUnit);
  //   prettier-ignore
  const priorityChangeHandler = (priority:string) =>  setPriority(priority);
  //   prettier-ignore
  const stateChangeHandler = (state:string) =>  setState(state);

  const submitHandler: FormEventHandler<HTMLFormElement> = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    addTask(name, time, timeUnit, priority, state);
    clearForm();
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <FormBox>
        <FormInput
          label="Name"
          placeholder="name"
          type="text"
          value={name}
          onChange={nameChangeHandler}
        />
        <button type="submit" className="form__btn">
          Add
        </button>
      </FormBox>

      <FormBox>
        <FormInput
          label="Time"
          placeholder="0"
          type="number"
          min={0}
          value={time}
          onChange={timeChangeHandler}
        />

        <FormOptions
          label="Time Unit"
          options={timeUnits}
          current={timeUnit}
          onClick={timeUnitChangeHandler}
        />
      </FormBox>

      <FormBox>
        <FormOptions
          label="Priority"
          options={priorities}
          current={priority}
          onClick={priorityChangeHandler}
        />

        <FormOptions
          label="State"
          options={states}
          current={state}
          onClick={stateChangeHandler}
        />
      </FormBox>
    </form>
  );
}

export default Form;
