import React , {useState} from 'react'
import { Stack } from '@mui/material'
import {categories} from '../utils/constants'
import {IconButton , Box , Typography} from '@mui/material'

const SideBar = ({setSelectedCategory }) => { 
    const [selected , setselected] = useState('New')
   
    return (
    
    <Stack direction='row' sx={{overflowY : 'auto' , height : {sx : '100%' , md : '100%'} , width : 170 ,
    flexDirection : {md : 'column'}}} >

    {categories.map((category , index)=> (  
   
       <button
      onClick={()=> {setselected(category.name) ; setSelectedCategory(category.name ) }}
        className='btn' style={{ marginBottom : 20 ,backgroundColor : category.name== selected ? 'red'  : 'black'}} key={category.name} >
         
       <span style={{color : category.name== selected ? 'white'  : 'red'}}> {category.icon}</span>
       <Typography sx={{ml : 1 , opacity : category.name== selected ? '1' : '0.9' , fontWeight :
    category.name== selected ? 'bold' : 'normal' }}>{category.name }</Typography>
       </button>
   
    ))}

    </Stack>
  ) }


export default SideBar