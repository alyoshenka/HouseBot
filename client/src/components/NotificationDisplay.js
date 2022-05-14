import Box from '@mui/material/Box/Box'
import Typography from '@mui/material/Typography'

import TableTest from './TableTest'

const NotificationDisplay = ({ notifications, errors, loading, update }) => {
  if (errors) {
    return <span>Errors!</span>
  } else if (loading) {
    return <span>Loading...</span>
  } else {
    return (
      <Box>
        <Typography variant="h5">Saved Notifications</Typography>
        <TableTest notifs={notifications} update={update} />
      </Box>
    )
  }
}

export default NotificationDisplay
