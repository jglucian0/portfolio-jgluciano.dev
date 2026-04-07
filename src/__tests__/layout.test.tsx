import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import RootLayout from '@/app/layout';

jest.mock('next-themes', () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  useTheme: () => ({ theme: 'dark', setTheme: jest.fn() }),
}));

describe('RootLayout', () => {
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => { });
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('deve renderizar o layout com children sem quebrar', () => {
    render(
      <RootLayout>
        <div data-testid="test-child">Conteúdo de Teste</div>
      </RootLayout>
    );

    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink).toBeInTheDocument();

    const childElement = screen.getByTestId('test-child');
    expect(childElement).toBeInTheDocument();
  });
});