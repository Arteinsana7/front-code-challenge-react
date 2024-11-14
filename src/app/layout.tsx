'use client'; 

import { ThemeProvider } from '@mui/material/styles'; // ThemeProvider from MUI
import theme from '../theme'; // Custom theme
import './globals.css'; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
