import { useTheme } from '../../context/ThemeContext.tsx';
import { formatDate } from '../../helpers/formatDate.ts';
import styles from './Header.module.css';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <header className={`${styles.header} ${isDark ? 'dark' : 'light'}`}>
      <h1 className={styles.title}>NEWS APP</h1>
      <p className={styles.date}>{formatDate(new Date())}</p>
      <button onClick={toggleTheme}>Theme</button>
    </header>
  );
};

export default Header;
