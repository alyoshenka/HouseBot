import Box from '@mui/material/Box/Box'
import Typography from '@mui/material/Typography'

import TableTest from './TableTest'

const NotificationDisplay = ({ notifications, errors, loading, update }) => {
  return (
    <Box>
      <Typography variant="h5">Saved Notifications</Typography>
      {errors ? (
        <span>Errors</span>
      ) : (
        <TableTest notifs={loading ? null : notifications} update={update} />
      )}
    </Box>
  )
}

export default NotificationDisplay
