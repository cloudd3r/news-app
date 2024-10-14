import withSkeleton from '../../helpers/hoc/withSkeleton';
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

const NewsListWithSkeleton = withSkeleton(NewsList, 'item', 10);

export default NewsListWithSkeleton;
