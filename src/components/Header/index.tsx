import styles from './Header.module.css'
import logo from '../../assets/logo.svg'
import {Link} from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai'

export const Header = () => {

  return (
    <>
    <div  className={styles.header} >
      <Link className={styles.logo} to="/"> <img src={logo} alt="logo"/></Link>
     
     
      <Link className={styles.favorite} to="/favorite"><AiFillStar/> Filmes salvos</Link>
      </div>
  </>)
}