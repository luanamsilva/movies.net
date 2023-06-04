import styles from './Favorite.module.css'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

function Favorite(){
const [movies, setMovies] = useState([])

useEffect(()=>{
  const myMovies = localStorage.getItem("@moviesNet");
  setMovies(JSON.parse(myMovies) || [])
},[])

function handleRemoveMovie(id) {
  const movieToRemove = movies.filter((movie)=> movie.id !== id)
setMovies(movieToRemove)  
}

  return (
    <div>
   <h1 className={styles.text}>Meus filmes salvos</h1>
   <ul>
    {movies.map((movie)=>(
      <li key={movie.key}>
       
       <Link to={`/movie/${movie.id}`} className={styles.link}> {movie.title}</Link>
        <button onClick={()=>handleRemoveMovie(movie.id) }>Excluir</button>
        </li>
    ))}
   </ul>
    </div>
  )
}

export default Favorite