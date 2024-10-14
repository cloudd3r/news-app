import { useDebaunce } from '../../helpers/hooks/useDebaunce';
import { useFetch } from '../../helpers/hooks/useFetch';
import { useFilters } from '../../helpers/hooks/useFilters';

import { getNews } from '../../api/apiNews';
import { PAGE_SIZE } from '../../constants/constants';

import LatestNews from '../LatestNews/LatestNews';

import styles from './Main.module.css';
import NewsByFIlters from '../NewsByFIlters/NewsByFIlters';

const Main = () => {
  const { filters, changeFilters } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: '',
  });

  const debauncedKeywords = useDebaunce(filters.keywords, 1500);

  const { data, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debauncedKeywords,
  });

  return (
    <main className={styles.main}>
      <LatestNews isLoading={isLoading} banners={data && data.news} />

      <NewsByFIlters
        isLoading={isLoading}
        filters={filters}
        changeFilters={changeFilters}
        news={data?.news}
      />
    </main>
  );
};

export default Main;
