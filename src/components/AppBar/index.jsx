import Box from '@mui/material/Box'
import ModeSelect from '../ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import { ReactComponent as TrelloLogo } from '~/assets/trello.svg'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Profiles from './Menus/Profiles'
function AppBar() {
  return (
    <Box px={2} sx={{
      width: '100%',
      height: (theme) => theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', grap: 2 }}>
        <AppsIcon sx={{ color: 'primary.main' }} />
        <Box px={2} sx={{ display: 'flex', alignItems: 'center', grap : 0.5 }}>
          <SvgIcon component={TrelloLogo} inheritViewBox sx={{ color: 'primary.main' }} />
          <Typography variant='span' sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'primary.main' }}>Trello</Typography>
        </Box>

        <Workspaces/>
        <Recent/>
        <Starred/>
        <Templates/>
        <Button variant="outlined">CREATE</Button>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', grap: 2 }}>
        <Box mx={2}>
          <TextField id="outlined-search" label="Search..." type="search" size='small' />
        </Box>
        <Box mx={2}>
          <ModeSelect/>
        </Box>
        <Box px={2} sx={{ display: 'flex', alignItems: 'center', grap: 2 }}>
          <Tooltip title="Notification" >
            <Badge color="secondary" variant="dot">
              <NotificationsNoneIcon/>
            </Badge>
          </Tooltip>
        </Box>
        <Box px={2} sx={{ display: 'flex', alignItems: 'center', grap: 2 }}>
          <Tooltip title="Help" >
            <HelpOutlineIcon/>
          </Tooltip>
        </Box>
        <Profiles/>
      </Box>
    </Box>
  )
}

export default AppBar
