import { useEffect, useState } from 'react';
import NewsBanner from '../NewsBanner/NewsBanner';
import { getNews } from '../../api/apiNews';

const Main = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await getNews();
        setNews(res.news);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);

  return <>{news.length > 0 ? <NewsBanner item={news[0]} /> : null}</>;
};

export default Main;
