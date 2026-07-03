import styles from './Loader.module.css';

export default function Loader() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spinner} aria-label="Loading..."></div>
    </div>
  );
}
