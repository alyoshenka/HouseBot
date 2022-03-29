import React from 'react'

import Box from '@mui/material/Box/Box'

import NavBar from '../components/NavBar'
import NotificationSelector from '../components/NotificationSelector'
import NotificationDisplay from '../components/NotificationDisplay'


function Home() {
    return (
        <React.Fragment>           
            <NavBar />
            <Box sx={{ m: 10, display: 'flex', justifyContent: 'space-around' }}>
                <NotificationSelector />
                <NotificationDisplay />
            </Box>
        </React.Fragment>       
    )
}

export default Home