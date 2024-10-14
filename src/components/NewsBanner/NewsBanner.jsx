import { formatDateAgo } from '../../helpers/formatDateAgo';
import withSkeleton from '../../helpers/hoc/withSkeleton';
import Image from '../Image/Image';
import styles from './NewsBanner.module.css';

const NewsBanner = ({ item }) => {
  const { image, title, published, author } = item;
  return (
    <div className={styles.wrapper}>
      <Image image={image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.date}>
        {formatDateAgo(published)} by {author}
      </p>
    </div>
  );
};

const NewsBannerWithSkeleton = withSkeleton(NewsBanner, 'banner', 1);

export default NewsBannerWithSkeleton;
