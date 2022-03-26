import ReactDOM from 'react-dom';
import App from './components/App';
import { StrictMode } from 'react';
import './styles/index.scss';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
