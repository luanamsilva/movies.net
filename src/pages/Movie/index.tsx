import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

function Movie() {
  const {id} = useParams();
 const [movie, setMovie] = useState({})

useEffect(()=>{
  async function loadMovie(){
await api.get(`/movie/${id}`, {
  params:{
    api_key: "52139d7800b359f24813bae453e23e2a",
    language: "pt-BR"
  }
})
.then((response)=>{
setMovie(response.data)
})
.catch(()=>{
console.log("Filme não encontrado")
})
  }loadMovie()
},[])

  return (
    <>
    <h1>{movie.title}</h1>
     <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}  alt={movie.title} />
     <h3>Sinopse</h3>
     <span>{movie.overview}</span>
    </>
  )
}
export default Movie