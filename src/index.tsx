import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './app/styles/index.scss';

import { App } from 'app/App';
import { ThemeProvider2 } from 'app/providers/ThemeProvider2';

import 'shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { PageError } from 'widgets/PageError';
import { StoreProvider } from 'app/providers/StoreProvider';

const root = createRoot(document.getElementById('app'));

root.render(
  <BrowserRouter>
    <ThemeProvider2>
      <StoreProvider>
        <ErrorBoundary fallback={<PageError />}>
          <App />
        </ErrorBoundary>
      </StoreProvider>
    </ThemeProvider2>
  </BrowserRouter>
);
