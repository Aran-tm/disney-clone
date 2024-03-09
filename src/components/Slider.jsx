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
    <div>
        {movieList.map((item) => (
            <img key={item.id} src={IMAGE_BASE_URL + item.backdrop_path} alt={item.title} />
        ))}
    </div>
  )
}

export default Slider
