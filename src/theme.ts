import { createTheme } from '@mui/material/styles';

// Create the theme with the custom color and breakpoints
const theme = createTheme({
  palette: {
    primary: {
      main: '#FF5959', // Default primary color (if needed)
    },
    background: {
      default: '#F3F2EF', // Background color
    },
    text: {
      primary: '#171717', // Text color
      secondary: '#4C4C49', // Text color
    },
    // Add your custom color to the theme's palette
    customColor: {
      main: '#D1D3CA', // Your custom color
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
  spacing: (factor: number) => `${factor * 8}px`,
  breakpoints: {
    values: {
      xs: 0, // Extra small devices (phones)
      sm: 600, // Small devices (landscape phones)
      tablet: 768, // Custom tablet breakpoint (iPad Mini, iPad Air)
      md: 960, // Medium devices (tablets, some small desktops)
      lg: 1200, // Large devices (desktops)
      xl: 1536, // Extra large devices (large desktops)
    },
  },
});

export default theme;
