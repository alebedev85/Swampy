import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

function NavBar({ icon, name }) {
  return (
    <nav className='navbar navbar_gap_48 navbar_padding-right_9'>
      <ul className='navbar__links hidden'>
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
      <NavLink to={'/profile'} className={`button ${styles.button}`}>
        <p className={styles.button__text}>
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
