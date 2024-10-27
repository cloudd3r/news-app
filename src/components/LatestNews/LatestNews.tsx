import { useGetLatestNewsQuery } from '../../store/services/newsApi';
import BannersList from '../BannersList/BannersList';
import styles from './LatestNews.module.css';

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={styles.section}>
      <BannersList isLoading={isLoading} banners={data && data.news} />
    </section>
  );
};

export default LatestNews;
