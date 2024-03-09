import { useEffect, useRef, useState } from 'react'
import GlobalAPI from '../services/GlobalAPI'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";   // esto es para obtener la url base de TDMB
const screenWidth = window.innerWidth;

function Slider() {

  useEffect(()=>{
      getTrendingMovies();
  }, []) // asi evito que se cargue infinitamente el efecto
    
  const [movieList,setMovieList] = useState([]);
  
  const elementRef = useRef();
    
  // obtener las peliculas 
  const getTrendingMovies = () => {
      GlobalAPI.getTrendingVideos.then(resp => {
          console.log(resp.data.results);
          setMovieList(resp.data.results);
      })
  }
  
  // Esto es para desplazar las imagenes a derecha o izquierda
  const sliderRight = (element) => {
      element.scrollLeft += screenWidth - 110;
    }
    
  const sliderLeft = (element) => {
      element.scrollLeft -= screenWidth - 110;
  }

  return (
      //  Con overflow-x-auto me pone un scrollbar
      // scrollbar-none oculta mi barra de desplazamiento horizontal para este caso
      <div>
          
          {/* Flechas para  */}
          <svg className='hidden md:block absolute mx-5 mt-[210px] cursor-pointer' onClick={() => sliderLeft(elementRef.current)} xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 64 64"><path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32c0 16.568 13.432 30 30 30s30-13.432 30-30C62 15.432 48.568 2 32 2m17 35.428H30.307V48L15 32l15.307-16v11.143H49z"/></svg>
          <svg className='hidden md:block absolute mx-5 mt-[210px] right-0 cursor-pointer' onClick={() => sliderRight(elementRef.current)} xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 64 64"><path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32c0 16.568 13.432 30 30 30s30-13.432 30-30C62 15.432 48.568 2 32 2m1.693 46V37.428H15V27.143h18.693V16L49 32z" /></svg>
          
        <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth'ref={elementRef}>
            {movieList.map((item) => (
                <img key={item.id} src={IMAGE_BASE_URL + item.backdrop_path} alt={item.title}
                className='min-w-full  md:h-[410px] object-cover object-left-top mr-5 rounded-lg'/>
            ))}
        </div>
      </div>
  )
}

export default Slider
