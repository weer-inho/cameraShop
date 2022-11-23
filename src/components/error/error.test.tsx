import {render, screen} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import Error from './error';

describe('Component: Error', () => {
  it('should render correctly', () => {
    render(
      <Router>
        <Error />
      </Router>,
    );

    const headerElement = screen.getByText('Page not found');
    const linkElement = screen.getByText('Go to main page');

    expect(headerElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
