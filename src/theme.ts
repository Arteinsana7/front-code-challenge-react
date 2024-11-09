import { createTheme } from '@mui/material/styles';

// Define your custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#FF5959', // Orange color for the banner
    },
    background: {
      default: '#F3F2EF', // Light gray background
    },
    text: {
      primary: '#171717', // Black text
      secondary: '#4C4C49', // Dark grey text
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif', // Default font for the app
    h1: {
      fontFamily: 'Arial, sans-serif', 
      fontSize: '48px',
      fontWeight: 'bold',
    },
    h2: {
      fontFamily: 'Arial, sans-serif',
      fontSize: '32px',
      fontWeight: 'normal',
    },
    body1: {
      fontFamily: 'Arial, sans-serif',
      fontSize: '20px',
    },
    body2: {
      fontFamily: 'Arial, sans-serif',
      fontSize: '16px',
    },
    subtitle1: {
      fontFamily: 'Arial, sans-serif',
      fontSize: '32px',
    },
    subtitle2: {
      fontFamily: 'Arial, sans-serif',
      fontSize: '24px',
      fontWeight: 'bold',
    },
  },
  spacing: (factor: number) => `${factor * 8}px`, // Example: spacing(1) = 8px
});

export default theme;
