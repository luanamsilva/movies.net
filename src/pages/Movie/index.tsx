import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import api from '../../services/api'
import styles from './Movie.module.css'
import {AiFillStar} from 'react-icons/ai'

function Movie() {
  const {id} = useParams();
 const [movie, setMovie] = useState({})
 const [loading, setLoading] = useState(true);

 
 useEffect(() => {
  async function loadMovie() {
    await api
      .get(`/movie/${id}`, {
        params: {
          api_key: "52139d7800b359f24813bae453e23e2a",
          language: "pt-BR",
        },
      })
      .then((response) => {
        setMovie(response.data);
        setLoading(false);
      })
      .catch(() => {
        console.log("Filme não encontrado");

      });
  }
  loadMovie();

}, []);

function handleSavedFavorite(){
const myFavoriteMovie = localStorage.getItem("@moviesNet")
let moviesSaved = JSON.parse(myFavoriteMovie) || []

const checkedMovie = moviesSaved.some((movieSaved)=> movieSaved.id === movie.id)

if(checkedMovie){
  alert("Já existe")
  return
}moviesSaved.push(movie)
localStorage.setItem("@moviesNet", JSON.stringify(moviesSaved))
} 

if(loading){
return(
  <div>
    <h3>carregando detalhes do filme</h3>
  </div>
)
}

  return (
    <div className={styles.details}>
    <h1>{movie.title}</h1>
     <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}  alt={movie.title} />
     <h3>Sinopse</h3>
     <span>{movie.overview}</span>
     <strong>Nota: {movie.vote_average.toFixed(2)}</strong>
     <button onClick={handleSavedFavorite} className={styles.favorite}><AiFillStar/>Adiconar aos favoritos</button></div>
     
  )
}
export default Movie