import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import { Notifications } from '@mantine/notifications';
import App from './App';
import { store } from './redux/store';
import { theme } from './theme';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <MantineProvider theme={theme}>
      <Notifications position="top-right" zIndex={1000} />
      <App />
    </MantineProvider>
  </Provider>
);
