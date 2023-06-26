import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { MovieTypes } from '../../types/MovieTypes';



function Home() {
  const [movies, setMovies] = useState<MovieTypes[]>([]);
  const [loadingMovies, setLoadingMovies] = useState(true);

  useEffect(() => {
    async function loadMovies() {
      const response = await api.get('movie/now_playing', {
        params: {
          api_key: "52139d7800b359f24813bae453e23e2a",
          language: 'pt-BR',
        },
      });
      setMovies(response.data.results.slice(0, 10));
      setLoadingMovies(false);
    }
    loadMovies();
  }, []);

  if (loadingMovies) {
    return <div className={styles.loadingMovies}>Carregando filmes...</div>;
  }
  return (
    <div className={styles.container}>
      {movies.map((movie) => {
        return (
          <div className={styles.container}>
            <article key={movie.id}>
              <strong>{movie.title}</strong>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
              />
              <span>
                <Link to={`/movie/${movie.id}`} className={styles.link}>
                  Acessar
                </Link>
              </span>
            </article>
          </div>
        );
      })}
    </div>
  );
}
export default Home;
