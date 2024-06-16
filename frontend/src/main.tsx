import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux/store';
import { theme } from './theme';
import '@mantine/dates/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </Provider>
);
