import styles from './Categories.module.css';

const Categories = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className={styles.categories}>
      <button
        onClick={() => {
          setSelectedCategory(null);
        }}
        className={selectedCategory === null ? styles.active : styles.item}
      >
        All
      </button>
      {categories.map((category) => {
        return (
          <button
            onClick={() => {
              setSelectedCategory(category);
            }}
            className={
              selectedCategory === category ? styles.active : styles.item
            }
            key={category}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
