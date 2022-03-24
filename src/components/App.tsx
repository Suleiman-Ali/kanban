import { ContextProvider } from '../context';
import Form from './Form';

function App(): JSX.Element {
  return (
    <ContextProvider>
      <div className="app">
        <Form />
      </div>
    </ContextProvider>
  );
}

export default App;
