import { useEffect, useState } from 'react'
import GlobalAPI from '../services/GlobalAPI'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";   // esto es para obtener la url base de TDMB

function Slider() {

  useEffect(()=>{
      getTrendingMovies();
  }, []) // asi evito que se cargue infinitamente el efecto
    
  const [movieList,setMovieList] = useState([]);
    
  // obtener las peliculas 
  const getTrendingMovies = () => {
      GlobalAPI.getTrendingVideos.then(resp => {
          console.log(resp.data.results);
          setMovieList(resp.data.results);
      })
  }

  return (
      //  Con overflow-x-auto me pone un scrollbar
      // scrollbar-none oculta mi barra de desplazamiento horizontal para este caso
      <div>
          
          {/* Flechas para  */}
          <svg className='text-[40px] absolute mx-5 mt-[220px] cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 64 64"><path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32c0 16.568 13.432 30 30 30s30-13.432 30-30C62 15.432 48.568 2 32 2m17 35.428H30.307V48L15 32l15.307-16v11.143H49z"/></svg>
          <svg className='text-[40px] absolute mx-5 mt-[220px] right-0' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 64 64"><path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32c0 16.568 13.432 30 30 30s30-13.432 30-30C62 15.432 48.568 2 32 2m1.693 46V37.428H15V27.143h18.693V16L49 32z" /></svg>
          
        <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none'>
            {movieList.map((item) => (
                <img key={item.id} src={IMAGE_BASE_URL + item.backdrop_path} alt={item.title}
                className='min-w-full h-[410px] object-cover object-left-top mr-5 rounded-lg'/>
            ))}
        </div>
      </div>
  )
}

export default Slider
