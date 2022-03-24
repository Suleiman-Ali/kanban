import { ContextProvider } from '../context';
import Board from './Board';
import Form from './Form';

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
