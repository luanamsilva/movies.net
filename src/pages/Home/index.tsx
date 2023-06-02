import {useEffect, useState} from 'react'
import api from '../../services/api'
import {Link} from "react-router-dom";
import styles from './Home.module.css'

function Home() {
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
      
 
      {movies.map((movie) => {
            return (
              <article className={styles.container} key={movie.id}>
                <strong className={styles.title}>{movie.title}</strong>
                <img className={styles.img}
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={movie.title}
                />
                <Link to={`/movie/${movie.id}`} className={styles.link}>Acessar</Link>
              </article>
            );
          })} 
    </>
  )
}
export default Home