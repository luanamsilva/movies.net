import styles from './Header.module.css'
import logo from '../../assets/logo.svg'
import {Link} from 'react-router-dom'

export const Header = () => {

  return (
    <>
    <div  className={styles.header} >
      <Link className={styles.logo} to="/"> <img src={logo} alt="logo"/></Link>
     
      </div>
      <div className={styles.divHead}> <Link className={styles.favorite} to="/favoritos"> Meus filmes</Link>
      </div>
  </>)
}