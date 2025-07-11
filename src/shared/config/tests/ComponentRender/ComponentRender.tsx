import { render } from '@testing-library/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { StateSchema } from 'app/providers/StoreProvider/config/stateSchema';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTest from 'shared/config/i18n/i18nForTest';

interface ComponentRenderOptions {
  route?: string;
  initialState?: Partial<StateSchema>;
}

export const ComponentRender = (
  component: ReactNode,
  options: ComponentRenderOptions = {}
) => {
  const { route = '/', initialState } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState as StateSchema}>
        <I18nextProvider i18n={i18nForTest}> {component} </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  );
};
