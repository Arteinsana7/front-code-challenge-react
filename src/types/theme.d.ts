import { Palette, BreakpointOverrides } from '@mui/material/styles';

// Extend Palette to include customColor
declare module '@mui/material/styles' {
  interface Palette {
    customColor: {
      main: string;
    };
  }

  interface PaletteOptions {
    customColor?: {
      main: string;
    };
  }

  // Extend BreakpointOverrides to add 'tablet' breakpoint
  interface BreakpointOverrides {
    tablet: true; // Add the 'tablet' breakpoint here
  }
}
