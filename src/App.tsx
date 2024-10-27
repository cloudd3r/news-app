import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { useTheme } from './context/ThemeContext';
import { useAppSelector } from './store';

function App() {
  const { isDark } = useTheme();
  const news = useAppSelector((state) => state.news.news);
  return (
    <div className={`container ${isDark ? 'dark' : 'light'}`}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
