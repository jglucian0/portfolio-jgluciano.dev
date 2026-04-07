import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

jest.mock('next-themes', () => ({
  useTheme: () => ({
    theme: 'dark',
    setTheme: jest.fn(),
  }),
}));

describe('Página Home', () => {
  it('deve renderizar a página inicial sem quebrar', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /João Gabriel Luciano/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it('deve renderizar a seção de experiências', () => {
    render(<Home />);

    const experienceHeading = screen.getByRole('heading', {
      name: /Experiências/i,
    });

    expect(experienceHeading).toBeInTheDocument();
  });

  it('deve renderizar a seção de projetos recentes', () => {
    render(<Home />);

    const projectsHeading = screen.getByRole('heading', {
      name: /Projetos recentes/i,
    });

    expect(projectsHeading).toBeInTheDocument();
  });
});