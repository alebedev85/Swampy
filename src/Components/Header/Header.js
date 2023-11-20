import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar'
import logo from '../../Image/Ellipse 1.png'

function Header(){
  return(
<header className={styles.header}>
        <Link to={'/'} className={`link ${styles.link}`}>
          <img src={logo} className={styles.link__img} alt='Логотип сайта' />
          <p className={styles.link__text}>Swampy</p>
        </Link>
        <NavBar
        name={'fdfgdfg'}
        icon={logo}/>
      </header>
  )
}

export default Header;
