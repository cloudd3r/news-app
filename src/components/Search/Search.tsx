import styles from './Search.module.css';

interface Props {
  keywords: string;
  setKeywords: (keywords: string | null) => void;
}

const Search = ({ keywords, setKeywords }: Props) => {
  return (
    <form className={styles.search}>
      <input
        className={styles.input}
        type='search'
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        placeholder='Search...'
      />
    </form>
  );
};

export default Search;
