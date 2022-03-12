import React, { useMemo } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';

export const Themer = ({ children }) => {
    let theme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    // Responsive Settings
    theme = responsiveFontSizes(theme);

    // Settings css variables
    document.documentElement.style.setProperty('--primary-color', theme.palette.primary[400]);
    document.documentElement.style.setProperty('--secondary-color', theme.palette.secondary[800]);
    document.documentElement.style.setProperty('--neutral-color', theme.palette.grey[600]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};

export default Themer;
