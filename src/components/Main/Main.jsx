import LatestNews from '../LatestNews/LatestNews';

import styles from './Main.module.css';
import NewsByFIlters from '../NewsByFIlters/NewsByFIlters';

const Main = () => {
  return (
    <main className={styles.main}>
      <LatestNews />

      <NewsByFIlters />
    </main>
  );
};

export default Main;
