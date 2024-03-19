import Button from '@mui/material/Button'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt'
import AccountTreeIcon from '@mui/icons-material/AccountTree'
import { red } from '@mui/material/colors'
import Typography from '@mui/material/Typography'
import { useColorScheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'

import Box from '@mui/material/Box'

function ModeSelect() {
  const { mode, setMode } = useColorScheme()

  const handleChange = (event) => {
    const selectedMode = event.target.value
    setMode(selectedMode)
    // setAge(event.target.value)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-drak-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-drak-light-mode"
        id="select-drak-light-mode"
        value={mode}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value='light'>
          <div style={{ display: 'flex', alignContent: 'center', gap: '8px' }}>
            <LightModeIcon fontSize='small'/>  Light
          </div>
        </MenuItem>
        <MenuItem value='dark'>
          <Box sx={{ display: 'flex', alignContent: 'center', gap: 2 }}>
            <DarkModeOutlinedIcon fontSize='small'/>  Drak
          </Box>
        </MenuItem>
        <MenuItem value='system'>
          <Box sx={{ display: 'flex', alignContent: 'center', gap: 2 }}>
            <SettingsBrightnessIcon fontSize='small'/>  System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  // const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)')
  // console.log('prefersDarkMode', prefersDarkMode)
  // console.log('prefersLightMode', prefersLightMode)
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}

function App() {
  return (
    <>
      <ModeSelect/>
      <hr/>
      <ModeToggle/>
      <hr/>
      <div>ninhnguyendev</div>
      <Typography variant='body2' color="text.secondary" >fsdfasdf</Typography>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <AccountTreeIcon color="action"/>
      <AddLocationAltIcon color="disabled"/>
      <AddLocationAltIcon sx={{ color: red[500] }} />
    </>
  )
}

export default App
