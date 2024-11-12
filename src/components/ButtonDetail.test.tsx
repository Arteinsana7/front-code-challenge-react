import React from 'react';
import { render, screen } from '@testing-library/react';
import ButtonDetail from './ButtonDetail'; // Adjust the path as needed
import '@testing-library/jest-dom';


describe('ButtonDetail Component', () => {
  test('should render button with provided text', () => {
    render(<ButtonDetail text="Click Me" url="http://example.com" />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click Me');
  });

  test('should have the correct link', () => {
    render(<ButtonDetail text="Click Me" url="http://example.com" />);
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'http://example.com');
  });
});
