import React from 'react'
import {Box , Card , CardContent , CardMedia , Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'
import {demoThumbnailUrl ,demoVideoUrl , demoVideoTitle , demoChannelUrl , demoChannelTitle }from './../utils/constants'


const VideoCard = ({video : {id : {videoId} , snippet}}) => {
    
  return (
    <Card  sx={{width : {sx : '320px' , xs : '100%'} }}>
    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
    <CardMedia sx={{width : 250 , height : 200 , marginBottom : '-48px' }} image = {snippet?.thumbnails?.high?.url} />
    </Link>
    <CardContent sx={{backgroundColor : '#1e1e1e' , height : 80  , width : 218 }}>
    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography  sx={{fontWeight : 'bold' , color : '#fff' , fontSize : 14 }}>{snippet?.title ? snippet?.title.slice(0,60) : demoVideoTitle.slice(0.60) }</Typography>
    </Link>
    <Link  to={snippet.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl}>
       <Box sx={{display : 'flex !important' , outline : 'none' , alignItems : 'center' }}>
       <Typography   sx={{fontWeight : 'bold' , color : 'gray' , fontSize : 12 }}>{snippet?.channelTitle ? snippet?.channelTitle.slice(0,60) : demoChannelTitle.slice(0.60) }</Typography>
        <CheckCircle sx={{color : 'gray' , fontSize : 14 , marginLeft : 1}} />
       </Box>
    </Link>
        </CardContent>


    </Card>
  )
}

export default VideoCard