import { useEffect, useState } from 'react';
import NewsBanner from '../NewsBanner/NewsBanner';
import { getNews } from '../../api/apiNews';
import NewsList from '../NewsList/NewsList';
import Skeleton from '../Skeleton/Skeleton';

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        const res = await getNews();
        setNews(res.news);
        console.log(res);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);

  return (
    <>
      {news.length > 0 && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton count={1} type='banner' />
      )}
      {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton count={10} type='item' />
      )}
    </>
  );
};

export default Main;
