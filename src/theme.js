import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0052cc'
    },
    secondary: {
      main: '#edf2ff'
    },
    text: {
      secondary: red[500]
    }
  }
})
export default theme