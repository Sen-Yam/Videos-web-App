import {React , useState , useEffect} from 'react' ;
import {Link , useParams} from 'react-router-dom';
import ReactPlayer from 'react-player';
import {Stack , Box , Typography} from '@mui/material'
import { CheckCircle, LocalConvenienceStoreOutlined  } from '@mui/icons-material';
import {IconButton} from '@mui/material';
import Videos from './Videos';
import FetchAPI from './../utils/FetchAPI'
import { ThumbDown , ThumbUp } from '@mui/icons-material';

const VideoDetail =() => {
  const[videodetail , setVideodetail] = useState(null)
 
  const {id} = useParams();
  useEffect( ()=> {
    async function FetchData() {
      const res = await FetchAPI(`videos?part=snippet,statstics&id=${id}`)
      .then  (async(data)=>{  const respeonse =await setVideodetail(data.items[0]);console.log(videodetail) })
     }// question : why videosetail in line 18 stills null ,malgre I did response await !!!
   FetchData();
  },[id])
  console.log(videodetail) ; 
  var V = videodetail ;
  console.log(V)
  return (
    
  <Box sx={{backgroundColor : '#000' , height : '100%'}}>
    <Stack direction = {{sx : 'column'  , md : 'row'}}>
     
      <Box>
       <Box sx={{width : '100% !important' , ml : 10 }}>
       <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls />
       

      <Typography variant='h6' sx={{color : 'white' , mt : 1}}>  {/* {V.snippet.title}  */} </Typography>
     
     <Box sx={{display : 'flex' }}>
     <Typography sx={{color : 'gray' , mt : 1 }}>{/* {videodetail.statistics.viewCount}  */}views</Typography>
      <Stack direction ='row' sx={{outline : 'none' , alignItems: 'center' ,width : 100 , ml : 3}}>
       <Typography  sx={{color : 'gray' , mt : 0.5 }}>{/* {videodetail.statistics.likeCount} */}</Typography>
       <IconButton sx={{width : '10px !important' , border : 'none'}}>
       <ThumbUp  sx={{color : 'gray' , fontSize : 20 , ml : 1 , mt : 0.5}} />
       </IconButton>
       </Stack>
     </Box>
      
       <Stack direction ='row' sx={{outline : 'none' , alignItems: 'center'}}>
       <Typography variant='h6' sx={{color : 'gray' , mt : 2 , fontWeight : 'bold'}}>{/* {videodetail.snippet.channelTitle} */}</Typography>
       <CheckCircle sx={{color : 'gray' , fontSize : 20 , ml : 1 , mt : 2}} />
       </Stack>
     <Box sx={{ width : '47% !important' , mt : 2 }}>
     <Typography variant='h7' sx={{color : 'gray' , mt : 1 , fontWeight : 'bold' }}>{/* {videodetail.snippet.description} */}</Typography>
     </Box> 
       </Box>
      </Box>
     
    </Stack>
   
  </Box>
  )
}

export default VideoDetail