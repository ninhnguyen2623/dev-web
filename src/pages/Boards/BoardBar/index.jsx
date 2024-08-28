import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnKeyIcon from '@mui/icons-material/VpnKey'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { Button, Tooltip } from '@mui/material'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder'
const MENU_STYLES = {
  color: 'primary.main',
  backgroundColor: 'white',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'primary.main'
  },
  '&: hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '2',
      paddingX: 2,
      overflow: 'auto',
      borderTop: '1px solid #00bfa5'

    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={ MENU_STYLES }
          icon={<DashboardIcon />}
          label='NinhNguyenDev love for working with this.'
        />
        <Chip
          sx={ MENU_STYLES }
          icon={<VpnKeyIcon />}
          label='Public/Private Workspace.'
        />
        <Chip
          sx={ MENU_STYLES }
          icon={<AddToDriveIcon />}
          label='Add To Drive.'
        />
        <Chip
          sx={ MENU_STYLES }
          icon={<AutoAwesomeIcon />}
          label='Automation.'
        />
        <Chip
          sx={ MENU_STYLES }
          icon={<FilterListIcon />}
          label='Filter.'
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button variant='outlined'startIcon={<PersonAddIcon/>} >Invite</Button>
        <AvatarGroup max={5}
          sx={{
            '& .MuiAvatar-root' : {
              width: 34,
              height: 34,
              fontSize: '16px'
            }
          }}
        >
          <Tooltip title='LoveFume'>
            <Avatar
              SX={{ width: 50, height: 50 }}
              alt="LoveFume"
              src="https://cdn.gazetedamga.com.tr/other/2023/05/27/whatsapp-image-2023-05-27-at-12-01-35-3.jpeg" />
          </Tooltip>
          <Tooltip title='LoveFume'>
            <Avatar
              alt="LoveFume"
              src="https://cdn.gazetedamga.com.tr/other/2023/05/27/whatsapp-image-2023-05-27-at-12-01-35-6.jpeg" />
          </Tooltip>
          <Tooltip title='LoveFume'>
            <Avatar
              alt="LoveFume"
              src="https://cdn.gazetedamga.com.tr/other/2023/05/27/whatsapp-image-2023-05-27-at-12-01-35-1.jpeg" />
          </Tooltip>
          <Tooltip title='LoveFume'>
            <Avatar
              alt="LoveFume"
              src="https://pbs.twimg.com/profile_images/1633849057495113728/Z4DO3hZZ_400x400.jpg" />
          </Tooltip>
          <Tooltip title='LoveFume'>
            <Avatar
              alt="LoveFume"
              src="https://pbs.twimg.com/profile_images/1633849057495113728/Z4DO3hZZ_400x400.jpg" />
          </Tooltip>
          <Tooltip title='LoveFume'>
            <Avatar
              alt="LoveFume"
              src="https://pbs.twimg.com/profile_images/1633849057495113728/Z4DO3hZZ_400x400.jpg" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
