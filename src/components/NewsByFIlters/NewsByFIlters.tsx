import Categories from '../Categories/Categories';
import NewsList from '../NewsList/NewsList';
import PaginationWrapper from '../PaginationWrapper/PaginationWrapper';
import Search from '../Search/Search';
import styles from './NewsByFIlters.module.css';

import { useDebaunce } from '../../helpers/hooks/useDebaunce';

import { TOTAL_PAGES } from '../../constants/constants';
import Slider from '../Slider/Slider';
import {
  useGetCategoriesQuery,
  useGetNewsQuery,
} from '../../store/services/newsApi';
import { useAppDispatch, useAppSelector } from '../../store';
import { setFIlters } from '../../store/slices/newsSlice';

const NewsByFIlters = () => {
  const dispatch = useAppDispatch();

  const filters = useAppSelector((state) => state.news.filters);

  const debauncedKeywords = useDebaunce(filters.keywords, 1500);

  const { data, isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debauncedKeywords,
  });

  const { data: dataCategories } = useGetCategoriesQuery(null);

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      dispatch(
        setFIlters({ key: 'page_number', value: filters.page_number + 1 })
      );
    }
  };

  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      dispatch(
        setFIlters({ key: 'page_number', value: filters.page_number - 1 })
      );
    }
  };

  const handlePageNumber = (pageNumber: number) => {
    dispatch(setFIlters({ key: 'page_number', value: pageNumber }));
  };

  return (
    <section className={styles.section}>
      {dataCategories ? (
        <Slider>
          <Categories
            categories={dataCategories.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) =>
              dispatch(setFIlters({ key: 'category', value: category }))
            }
          />
        </Slider>
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) =>
          dispatch(setFIlters({ key: 'keywords', value: keywords }))
        }
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
