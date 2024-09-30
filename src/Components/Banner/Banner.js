import React, { useEffect, useState } from 'react'
import "./Banner.css";
import axios from "../../axios.js";
import {API_KEY,imageUrl} from "../../constands/constants.js";
function Banner() {
  const [movie, setMovie] = useState()
    useEffect(() =>{
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
          console.log(response.data.results[0]);
          setMovie(response.data.results[0])
        })
    },[])
  return (
    
    <div className='banner'
      style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:"loading"})`}}>
      <div className='content'>
        
        <h1 className='title'>{movie ? (movie.title || movie.name) : "Loading..."}</h1>
        <div className='banner_buttons'>
            <button className='button'>Play</button>
            <button className='button'>My list</button>
        </div>
        <h1 className='description'>{movie ? movie.overview:"loading"}</h1>
      </div>
     <div className='fade_bottom'></div>
    
    </div>
  )
}

export default Banner
