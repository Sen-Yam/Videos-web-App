import React from 'react'
import {useState , useEffect} from 'react'
import {Box , Stack , Typography} from '@mui/material'
import SideBar from './SideBar'
import FetchAPI from '../utils/FetchAPI' ;
import Videos from './Videos';

const Feed = () => {
 
  const [videos , setvideos] = useState([])
  
  
  const [SelectedCategory , setSelectedCategory] = useState('New')
 
   useEffect(()=> {
     FetchAPI(`search?part=snippet&q=${SelectedCategory}`)
   .then((data)=> {setvideos(data.items) ; }  )  }
  ,[SelectedCategory]
  ) 
  
 
  return (
    <Stack sx={{flexDirection : {sx : 'column ' , md : 'row' , backgroundColor : '#000' }}}>
      <Box sx={{height : {sx : '100%' , md :'100%' }  , borderRight : '1px solid #3d3d3d',
      px : {sx :0 , md : 2} , width : '100%'
    }}>
      
      <SideBar setSelectedCategory={(name)=> setSelectedCategory(name)} />
      </Box>
      <Box sx={{overflow : 'scroll' , height : '143vh'}}>
       <Stack direction='row' >
       <Typography variant='h4' sx={{color : 'white' , marginLeft : 1 , fontWeight : 'bold'}}>
          {SelectedCategory}
        </Typography>
        <Typography variant='h4' sx ={{color : 'red' , marginLeft : 2 , fontWeight : 'bold'}}>
          videos
        </Typography>
       </Stack>
       <Videos  videos={videos}/>
       
      </Box>
    </Stack>
  )
}

export default Feed;