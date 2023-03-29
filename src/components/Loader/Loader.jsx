import { Circles } from 'react-loader-spinner';
import styles from './Loader.module.css';

export default function Loader() {
  return (
    <div className={styles.loader}>
      <Circles color="#c63e3e" />;
    </div>
  );
}
