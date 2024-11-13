// src/components/BannerElement.test.tsx
import { render, screen } from '@testing-library/react';
import BannerElement from '../Banner/BannerElement';  // Import the real component

describe('BannerElement Component', () => {
  it('renders the title and description correctly', () => {
    render(<BannerElement />);
    
    // Get title and description from the component
    const title = screen.getByText('Test Title');
    expect(title).toBeInTheDocument();  // Check if the title is rendered
    
    const description = screen.getByText('Test Description');
    expect(description).toBeInTheDocument();  // Check if the description is rendered
  });

  it('renders with the background image if backgroundAsset is provided', () => {
    render(<BannerElement />);
    
    // Check if the background image is correctly applied
    const container = screen.getByTestId('banner-element');
    expect(container).toHaveStyle('background-image: url(https://example.com/background.jpg)');
  });

  it('applies correct styles', () => {
    render(<BannerElement />);
    
    const container = screen.getByTestId('banner-element');
    
    // Check for background styles
    expect(container).toHaveStyle('background-size: cover');
    expect(container).toHaveStyle('background-position: center');
  });
});
