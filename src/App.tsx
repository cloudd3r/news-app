import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { useTheme } from './context/ThemeContext';

function App() {
  const { isDark } = useTheme();
  return (
    <div className={`container ${isDark ? 'dark' : 'light'}`}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
