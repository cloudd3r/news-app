import NewsItem from '../NewsItem/NewsItem';
import styles from './NewsList.module.css';

const NewsList = ({ news }) => {
  return (
    <li className={styles.list}>
      {news.map((item) => (
        <NewsItem key={item.id} item={item} />
      ))}
    </li>
  );
};

export default NewsList;
