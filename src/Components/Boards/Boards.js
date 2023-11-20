import styles from './Boards.module.scss';
import { Link } from 'react-router-dom';

function Boards() {
  return (
    <section className={styles.section}>
      <ul className={`list ${styles.list}`}>
        <li>
          <Link to={'/boards/id_1'} className={`link ${styles.link}`}>
            <p className={styles.link__text}>Доска 1</p>
          </Link>
        </li>
        <li>
          <Link to={'/boards/id_2'} className={`link ${styles.link}`}>
            <p className={styles.link__text}>Доска 2</p>
          </Link>
        </li>
        <li>
          <Link to={'/boards/id_3'} className={`link ${styles.link}`}>
            <p className={styles.link__text}>Доска 3</p>
          </Link>
        </li>
        <li>
          <Link to={'/boards/id_4'} className={`link ${styles.link}`}>
            <p className={styles.link__text}>Доска 4</p>
          </Link>
        </li>
      </ul>
      <Link to={'/board/new'} className={`link ${styles.link} ${styles.link_new}`}>
        <p className={styles.link__text}>Создать новую доску</p>
      </Link>
    </section>
  )
}

export default Boards
