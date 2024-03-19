import Button from '@mui/material/Button'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt'
import AccountTreeIcon from '@mui/icons-material/AccountTree'
import { red } from '@mui/material/colors'
import Typography from '@mui/material/Typography'
import { useColorScheme } from '@mui/material/styles'


function ModeToggle() {
  const { mode, setMode } = useColorScheme()
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
