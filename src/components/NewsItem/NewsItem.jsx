import { formatDateAgo } from '../../helpers/formatDateAgo';
import styles from './NewsItem.module.css';

const NewsItem = ({ item }) => {
  const { image, title, published, author } = item;
  return (
    <ul className={styles.newsItem}>
      <div
        className={styles.wrapper}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className={styles.info}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.date}>
          {formatDateAgo(published)} by {author}
        </p>
      </div>
    </ul>
  );
};

export default NewsItem;
