import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import { App } from 'app/App';
import { ThemeProvider } from 'app/providers/ThemeProvider/ui/ThemeProvider';

const root = createRoot(document.getElementById('app'));

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
