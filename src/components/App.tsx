import Board from './Board';
import Form from './Form';
import { ContextProvider } from '../context';

function App(): JSX.Element {
  return (
    <ContextProvider>
      <div className="app">
        <Form />
        <Board />
      </div>
    </ContextProvider>
  );
}

export default App;

// TODO: RESPONSIVENESS
// TODO: REFACTOR
// TODO: TEST
