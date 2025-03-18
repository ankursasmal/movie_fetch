 import React, { useEffect, useState } from 'react'
 
 function App() {
  let [movie,setmovie]=useState([]);
  let [movietype,setMovietype]=useState('')
let [loder,setloder]=useState(false);

  // add a search funftonality
  const movietypes=async()=>{
     try{
      setloder(true)

      const res = await fetch(`https://dummyapi.online/api/movies/${movietype}`, {
      method: 'GET',
      credentials: 'include',
    });
    const movieData = await res.json();
     setloder(false)
    setMovie(movieData);

    }
    catch(e){
      console.log('not present this type of movie');
    }
  }

  const getMovieData = async (setMovie) => {
    try {
      setloder(true)
      const res = await fetch('https://dummyapi.online/api/movies', {
        method: 'GET',
        credentials: 'include',
      });
      const movieData = await res.json();
      console.log(movieData)
      setloder(false)

      setMovie(movieData);
    } catch (error) {
      console.error('Failed to fetch movie data:', error);
    }
  };

  useEffect(()=>{
    getMovieData(setmovie);

  },[])

   return (
     <div style={{display:'flex',alignItems:'center',width:'100vw',minHeight:'100vh',marginTop:'2vw',flexDirection:'column',paddingBottom:'2vw'}}>
      <h1 style={{fontWeight:'600',color:'blue',fontSize:'2.5rem '}}>MOVIE APP</h1>
      <input type="text" value={movietype} style={{margin:'20px 0px',width:'80%',outline:'none',border:'black 1px solid',padding:'1.5vw',borderRadius:'5vw',fontSize:'2vw'}} placeholder='search type of movie'  onChange={e=>{ movietypes();setMovietype(e.target.value)}} />
      
     {loder?<img src='loder.gif' style={{width:'7vw'}}/>: <div style={{display:'flex',alignItems:'center',flexDirection:'column', gap:'2px',width:'70vw'}}>
      {movie?.movie?.map((val,i)=>{
        return(
          <div key={i} style={{width:'100%',display:'flex',alignItems:'start',gap:'3px',border:'1px solid black',borderRadius:'5%'}}>
            <img src={val.image} />
            <span style={{padding:'0 3px'}}> {val.movie}</span>
            <span> {val.rating}</span>
            </div> 
        )
      })}
        </div> }
     </div>
   )
 }
 
 export default App
 