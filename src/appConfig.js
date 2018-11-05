import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#fff',
      main: '#fff',
      dark: '#fff',
      contrastText: '#fff',
    },
    secondary: {
      light: '#fff',
      main: '#fff',
      dark: '#fff',
      contrastText: '#fff',
    },
    error: {
      light: '#fff',
      main: '#fff',
      dark: '#fff',
      contrastText: '#fff',
    },
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Segoe UI',
      'Tahoma',
      'Geneva',
      'Verdana',
      'sans - serif'
    ].join(','),
  },
})