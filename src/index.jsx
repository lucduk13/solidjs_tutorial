/* @refresh reload i
f (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
} */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';


render(() => <App />, document.getElementById('root'));
