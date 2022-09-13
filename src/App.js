import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import { Box } from '@mui/material'
import NavBar from './Components/NavBar'
import Feed from './Components/Feed'
import VideoDetail from './Components/VideoDetail'
import SearchFeed from './Components/SearchFeed'





const App = () => (
    <BrowserRouter>
    <Box sx={{backgroundColor : '#000'}}>
    <NavBar /> 
    <Routes>
        
        <Route path='/' exact element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/search/:searchTerm' element={< SearchFeed/>} />
        
    </Routes>
    </Box>
    
    </BrowserRouter>
  )


export default App