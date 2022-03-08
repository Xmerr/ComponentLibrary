import React, { useMemo } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';

import blue from '@mui/material/colors/blue';
import red from '@mui/material/colors/red';

export const Themer = ({ children }) => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    // Set Theme Colors
    let theme = useMemo(
        () =>
            createTheme({
                palette: {
                    background: {
                        default: '#2e3445',
                    },
                    mode: prefersDarkMode ? 'dark' : 'light',
                    primary: red,
                    secondary: blue,
                    text: {
                        primary: '#fff',
                    },
                },
                typography: {
                    subtitle2: {
                        fontSize: '0.5rem',
                    },
                },
            }),
        [prefersDarkMode]
    );

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
