import App from './components/App';
import { render } from 'react-dom';
import { StrictMode } from 'react';
import './styles/index.scss';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
