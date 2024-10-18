import { getLatestNews } from '../../api/apiNews';
import { useFetch } from '../../helpers/hooks/useFetch';
import { NewsApiResponse } from '../../interfaces';
import BannersList from '../BannersList/BannersList';
import styles from './LatestNews.module.css';

const LatestNews = () => {
  const { data, isLoading } = useFetch<NewsApiResponse, null>(getLatestNews);

  return (
    <section className={styles.section}>
      <BannersList isLoading={isLoading} banners={data && data.news} />
    </section>
  );
};

export default LatestNews;
