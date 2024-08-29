import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { red, blue, teal, cyan, deepOrange } from '@mui/material/colors'
const theme = extendTheme({
  trello: {
    appBarHeight: '58px',
    boardBarHeight: '60px'
  },
  colorSchemes: {
    // light: {
    //   palette: {
    //     primary: teal
    //   },
    //   spacing: (factor) => `${0.25 * factor}rem`
    // },
    // dark: {
    //   palette: {
    //     // primary: {
    //     //   main: '#000'
    //     // }
    //   },
    //   spacing: (factor) => `${0.25 * factor}rem`
    // }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '7px',
            height: '7px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#dcdde1',
            borderRadius: '10px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'white'
          }
        }
      }
    },
    //style button header
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderWidth: '0.5px',
          '&:hover': {
            borderWidth: '0.5px'
          }
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
        root: {
          height: '36px'
        }
      }
    },
    // style input header
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          // color: theme.palette.primary.blue,
          fontSize: '0.875rem',
          // '.MuiOutlinedInput-notchedOutline' : {
          //   borderColor: theme.palette.primary.light
          // },
          // '&:hover':{
          //   '.MuiOutlinedInput-notchedOutline' : {
          //     borderColor: theme.palette.primary.main
          //   }
          // },
          '& fieldset':{
            borderWidth: '0.5px !important'
          },
          '&:hover fieldset':{
            borderWidth: '1.6px !important'
          },
          '&.Mui-focused fieldset':{
            borderWidth: '1.6px !important'
          }

        }
      }
    }
  }
})
export default theme
