import { forwardRef } from 'react';
import styles from './Categories.module.css';

const Categories = forwardRef(
  ({ categories, selectedCategory, setSelectedCategory }, ref) => {
    return (
      <div ref={ref} className={styles.categories}>
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
  }
);

Categories.displayName = 'Categories';

export default Categories;
