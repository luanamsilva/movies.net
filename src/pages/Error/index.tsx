import styles from './Error.module.css'
import {Link} from 'react-router-dom'
function Error (){
  return (
    <div className={styles.notFoud}>
      <h1>404</h1>
      <p>Página não encontrada!</p>

<Link to="/" className={styles.link}>Você pode ver os filmes acessando aqui!</Link>
      
      </div>
  )
}
export default Error