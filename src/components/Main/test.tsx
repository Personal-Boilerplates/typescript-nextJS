import { render, screen } from '@testing-library/react';

import Main from './index';

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />);

    expect(
      screen.getByRole('heading', { name: /primeiro teste react/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the colors correctly', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toHaveStyle({ 'background-color': '#f0f0f5' });
  });
});
