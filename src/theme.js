import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    secondary: {
      main: '#fff',
    },
  },

  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
});
