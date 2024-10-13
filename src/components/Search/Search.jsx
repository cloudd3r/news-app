import styles from './Search.module.css';

const Search = ({ keywords, setKeywords }) => {
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
