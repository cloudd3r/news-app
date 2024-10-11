import { useEffect, useState } from 'react';
import NewsBanner from '../NewsBanner/NewsBanner';
import { getNews } from '../../api/apiNews';
import NewsList from '../NewsList/NewsList';
import Skeleton from '../Skeleton/Skeleton';
import Pagination from '../Pagination/Pagination';

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const pageSize = 10;

  const fetchNews = async (currentPage, pageSize) => {
    try {
      setIsLoading(true);
      const res = await getNews(currentPage, pageSize);
      setNews(res.news);
      console.log(res);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNews(currentPage, pageSize);
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageNumber = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {news.length > 0 && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton count={1} type='banner' />
      )}

      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageNumber={handlePageNumber}
        totalPages={totalPages}
        currentPage={currentPage}
      />

      {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton count={10} type='item' />
      )}

      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageNumber={handlePageNumber}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </>
  );
};

export default Main;
