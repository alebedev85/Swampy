import styles from './Board.module.scss'

function Board() {
  return (
    <section className={styles.section}>
      <ul className={`list ${styles.list}`}>
        <li className={styles.column}>
          <p className={styles.column__text}>Запланировано</p>
          <div className={styles.column__space}></div>
        </li>
        <li className={styles.column}>
          <p className={styles.column__text}>В процессе</p>
          <div className={styles.column__space}></div>
        </li>
        <li className={styles.column}>
          <p className={styles.column__text}>Сделано</p>
          <div className={styles.column__space}></div>
        </li>
      </ul>
      <div className={styles.buttons}>
        <button className={`button ${styles.button}`}>
          <p className={styles.button__text}>Новый список</p>
        </button>
      </div>

    </section>
  )
}

export default Board

