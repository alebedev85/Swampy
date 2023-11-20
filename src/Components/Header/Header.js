import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar'

function Header({logo}){
  return(
<header className={styles.header}>
        <Link to={'/'} className={`link ${styles.link}`}>
          <img src={logo} className='logo' alt='Логотип сайта' />
        </Link>
        <NavBar />
      </header>
  )
}

export default Header;
