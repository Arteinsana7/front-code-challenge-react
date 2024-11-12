// src/components/CardGrid.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import CardGrid from './CardGrid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import data from '../data/index.json'; // Importing real JSON data for the test

// Mock the ButtonDetail component as we don't need to test it here
jest.mock('./ButtonDetail', () => ({
  __esModule: true,
  default: ({ text }: { text: string }) => <button>{text}</button>,
}));

const theme = createTheme(); // Mock MUI theme for the test

describe('CardGrid Component', () => {
  it('renders the title correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <CardGrid />
      </ThemeProvider>
    );

    // Check if the title from cardGridData is displayed
    const titleElement = screen.getByText(data.content[0].title);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the correct number of cards', () => {
    render(
      <ThemeProvider theme={theme}>
        <CardGrid />
      </ThemeProvider>
    );

    // Check if the correct number of cards are rendered
    const cardElements = screen.getAllByRole('article'); // Assuming each card is an article
    expect(cardElements.length).toBe(data.content[0].cards.length);
  });

  it('renders card details correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <CardGrid />
      </ThemeProvider>
    );

    // Verify that card titles and descriptions are rendered correctly
    const firstCardTitle = screen.getByText(data.content[0].cards[0].title);
    const firstCardDescription = screen.getByText(data.content[0].cards[0].description);
    
    expect(firstCardTitle).toBeInTheDocument();
    expect(firstCardDescription).toBeInTheDocument();
  });

  it('renders the ButtonDetail component when CTA is provided', () => {
    render(
      <ThemeProvider theme={theme}>
        <CardGrid />
      </ThemeProvider>
    );

    // Check if the button appears when a CTA is provided
    const buttonText = data.content[0].cards[0].cta?.text;
    if (buttonText) {
      const buttonElement = screen.getByText(buttonText);
      expect(buttonElement).toBeInTheDocument();
    }
  });

  it('displays "No card data available" when no card data is provided', () => {
    // Temporarily mock data to simulate no card data
    const mockData = {
      content: [
        {
          type: 'CARD_GRID',
          title: 'Test Card Grid',
          cards: [],
        },
      ],
    };

    jest.mock('../data/index.json', () => mockData);

    render(
      <ThemeProvider theme={theme}>
        <CardGrid />
      </ThemeProvider>
    );

    const noDataMessage = screen.getByText('No card data available');
    expect(noDataMessage).toBeInTheDocument();
  });

  it('should display fallback image if card does not have a background asset', () => {
    render(
      <ThemeProvider theme={theme}>
        <CardGrid />
      </ThemeProvider>
    );

    // Get the image from the first card and check the fallback image URL
    const cardImage = screen.getByRole('img');
    expect(cardImage).toHaveAttribute('src', 'path/to/fallback-image.jpg');
  });
});
