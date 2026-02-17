import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000000', // Deep black background as seen in screenshot
      paper: '#1e1e1e',   // Slightly lighter for cards/tables
    },
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#f48fb1',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h5: {
      fontWeight: 600,
    },
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid #333',
        },
        head: {
          color: '#b0b0b0',
          fontWeight: 500,
        },
      },
    },
  },
});

export default theme;
