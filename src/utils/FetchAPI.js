import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com' ;
const options = {
  params: {
  
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '86cfb8481bmsha082ea4c9b89083p1dc7d2jsn3a868e214dc9',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};



const FetchAPI = async (url) => {

     const {data} = await axios.get(`${BASE_URL}/${url}` , options) 
    
 
     return data;   // must be called data cuz it's the return of axios 
 
 
 
}

export default FetchAPI