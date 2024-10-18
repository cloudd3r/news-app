import Categories from '../Categories/Categories';
import NewsList from '../NewsList/NewsList';
import PaginationWrapper from '../PaginationWrapper/PaginationWrapper';
import Search from '../Search/Search';
import styles from './NewsByFIlters.module.css';

import { useDebaunce } from '../../helpers/hooks/useDebaunce';
import { useFilters } from '../../helpers/hooks/useFilters';

import { getNews } from '../../api/apiNews';
import { PAGE_SIZE } from '../../constants/constants';
import { TOTAL_PAGES } from '../../constants/constants';
import { useFetch } from '../../helpers/hooks/useFetch';
import { getCategories } from '../../api/apiNews';
import Slider from '../Slider/Slider';
import {
  CategoriesApiResponse,
  NewsApiResponse,
  ParamsType,
} from '../../interfaces';

const NewsByFIlters = () => {
  const { filters, changeFilters } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: '',
  });

  const debauncedKeywords = useDebaunce(filters.keywords, 1500);

  const { data, isLoading } = useFetch<NewsApiResponse, ParamsType>(getNews, {
    ...filters,
    keywords: debauncedKeywords,
  });

  const { data: dataCategories } = useFetch<CategoriesApiResponse, null>(
    getCategories
  );

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      changeFilters('page_number', filters.page_number + 1);
    }
  };

  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      changeFilters('page_number', filters.page_number - 1);
    }
  };

  const handlePageNumber = (pageNumber: number) => {
    changeFilters('page_number', pageNumber);
  };

  return (
    <section className={styles.section}>
      {dataCategories ? (
        <Slider>
          <Categories
            categories={dataCategories.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) =>
              changeFilters('category', category)
            }
          />
        </Slider>
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilters('keywords', keywords)}
      />

      <PaginationWrapper
        top
        bottom
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageNumber={handlePageNumber}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      >
        <NewsList isLoading={isLoading} news={data?.news} />
      </PaginationWrapper>
    </section>
  );
};

export default NewsByFIlters;
