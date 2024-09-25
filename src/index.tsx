import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import { App } from 'app/App';
import { ThemeProvider } from 'app/providers/ThemeProvider';

import 'shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { PageError } from 'widgets/PageError';

const root = createRoot(document.getElementById('app'));

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <ErrorBoundary fallback={<PageError />}>
        <App />
      </ErrorBoundary>
    </ThemeProvider>
  </BrowserRouter>
);
