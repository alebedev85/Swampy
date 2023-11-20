import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

function NavBar({ icon, name }) {
  return (
    <nav className={styles.navbar}>
      <ul className={`list ${styles.list}`}>
        <li>
          <NavLink
            to={'/tasks'}
            className={`link ${styles.link}`}>
            Доска задач
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/base'}
            className={`link ${styles.link}`}>
            База знаний
          </NavLink>
        </li>
      </ul>
      <NavLink to={'/profile'} className={`link ${styles.button}`}>
        <p className={`link ${styles.button__text}`}>
          {name}
        </p>
        <img
          className={styles.button__icon}
          src={icon}
          alt='Иконка пользователя' />
      </NavLink>
    </nav>
  )
}

export default NavBar;
