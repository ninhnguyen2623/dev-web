import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { red, blue, teal, cyan, deepOrange } from '@mui/material/colors'
const theme = extendTheme({
  trello: {
    appBarHeight: '58px',
    boardBarHeight: '60px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal
      },
      spacing: (factor) => `${0.25 * factor}rem`
    },
    dark: {
      palette: {
        // primary: {
        //   main: '#000'
        // }
      },
      spacing: (factor) => `${0.25 * factor}rem`
    }
  }
})
export default theme
