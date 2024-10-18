import withSkeleton from '../../helpers/hoc/withSkeleton';
import { INews } from '../../interfaces';
import NewsItem from '../NewsItem/NewsItem';
import styles from './NewsList.module.css';

interface Props {
  news?: INews[];
}

const NewsList = ({ news }: Props) => {
  return (
    <li className={styles.list}>
      {news?.map((item) => (
        <NewsItem key={item.id} item={item} />
      ))}
    </li>
  );
};

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 'item', 10);

export default NewsListWithSkeleton;
