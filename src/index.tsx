import './wdyr';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './app/styles/index.scss';

import { App } from 'app/App';
import { ThemeProvider } from 'app/providers/ThemeProvider';

import 'shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { PageError } from 'widgets/PageError';
import { StoreProvider } from 'app/providers/StoreProvider';

const container = document.getElementById('app');
if (!container) throw new Error('Root container not found');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <StoreProvider>
      <ThemeProvider>
        <ErrorBoundary fallback={<PageError />}>
          <App />
        </ErrorBoundary>
      </ThemeProvider>
    </StoreProvider>
  </BrowserRouter>
);
