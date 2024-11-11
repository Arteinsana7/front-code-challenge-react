// src/types/theme.d.ts
import { Palette } from '@mui/material/styles';

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
}
