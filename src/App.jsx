import { useState } from 'react'
import Button from '@mui/material/Button'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt'
import AccountTreeIcon from '@mui/icons-material/AccountTree'
import { red } from '@mui/material/colors'
import Typography from '@mui/material/Typography';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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
