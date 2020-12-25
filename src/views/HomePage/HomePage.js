import { useState, useEffect } from 'react';
import fetchApiPopular from '../../service/fetchApiPopular';
import MoviesList from '../../components/MoviesList/MoviesList';
import { Title } from './StyledComponent';

export default function HomePage() {
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = () => {
    fetchApiPopular(page).then(data => {
      if (films.length < data.total_results) {
        setFilms(data.results);
      }
    });
  };

  return (
    <>
      <Title>Top rates</Title>
      {films.length > 0 && <MoviesList films={films} />}
    </>
  );
}
