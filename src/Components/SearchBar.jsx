import React from 'react'
import { useState } from 'react'
import useNavigate from 'react-router-dom'
import {Paper , IconButton} from '@mui/material'
import {Search } from '@mui/icons-material'

const SearchBar = () => 
   (
    <Paper 
    sx={{ borderRadius : 20  , width : 390 , height : 35 , padding : 1
        
    }}
    >
        <input placeholder='Search...' className='search-bar' />
       <IconButton sx={{pb:0.5 , color : 'red'}}>
       <Search /> 
       </IconButton>
    </Paper>
  )


export default SearchBar