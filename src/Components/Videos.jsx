import React from 'react'
import {Stack , Box} from '@mui/material'

import VideoCard from './VideoCard'
import VideoDetail from './VideoDetail'
const Videos = ({videos}) => {
  console.log(videos)
  return ( 
     <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2} sx={{marginLeft : 1.5 , overflow : 'scroll'}} >
    {videos.map((video , index)=> (
      <Box key={video.index} >
         <VideoCard video = {video} />
       
      </Box>
    ))}
    
    </Stack> 
  )
}

export default Videos