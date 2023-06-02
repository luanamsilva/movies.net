import RoutesApp from './routes'
import {useEffect, useState} from 'react'
import api from './services/api'
import MoviesProps from './types/MoviesProps'
import styles from './App.module.css'


function App() {

  const [movies, setMovies] = useState<MoviesProps[]>([])

  useEffect(()=>{
    async function loadMovies() {
     const response = await api.get("movie/now_playing", {
      params: {
      api_key: "52139d7800b359f24813bae453e23e2a",
     language: "pt-BR",
     page: 1,
     }
   })
   setMovies(response.data.results)
  }
    loadMovies();
  },[])

  return (
    <> 
      <RoutesApp/>

 
 {movies.map((movie)=>(
  <article key={movie.id}> 
  <strong>{movie.title}</strong>
  <img className={styles.img} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
  </article>
  ))}
    </>
  )
}

export default App
