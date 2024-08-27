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
  },
  components: {
    //style button header
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem'
        })
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: ({ theme }) => ({
          height: '36px'
        })
      }
    },
    // style input header
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.blue,
          fontSize: '0.875rem',
          '.MuiOutlinedInput-notchedOutline' : {
            borderColor: theme.palette.primary.light
          },
          '&:hover':{
            '.MuiOutlinedInput-notchedOutline' : {
              borderColor: theme.palette.primary.main
            }
          },
          '& fieldset':{
            borderWidth: '1px !important'
          }

        })
      }
    }
  }
})
export default theme
