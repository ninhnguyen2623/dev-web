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
import Container from '@mui/material/Container'

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
          <Box sx={{ display: 'flex', alignContent: 'center', gap: 1 }}>
            <DarkModeOutlinedIcon fontSize='small'/>  Drak
          </Box>
        </MenuItem>
        <MenuItem value='system'>
          <Box sx={{ display: 'flex', alignContent: 'center', gap: 1 }}>
            <SettingsBrightnessIcon fontSize='small'/>  System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

function App() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <Box sx={{
        backgroundColor: 'primary.light',
        width: '100%',
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center'
      }}>
        <ModeSelect/>
      </Box>
      <Box sx={{
        backgroundColor: 'primary.dark',
        width: '100%',
        height: (theme) => theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center'
      }}>
        Board Bar
      </Box>
      <Box sx={{
        backgroundColor: 'primary.main',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        height: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`
      }}>
        Board Content
      </Box>
    </Container>
  )
}

export default App
