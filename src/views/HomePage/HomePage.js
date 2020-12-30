import { useState, useEffect, useContext } from 'react';
import { getPopular } from '../../service/fetchApi';
import MoviesList from '../../components/MoviesList/MoviesList';
import { Title } from './StyledComponent';
import FilmReturnContext from '../../context/context';

export default function HomePage() {
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  const { isFromDataState, onClearState, idItem } = useContext(
    FilmReturnContext,
  );

  useEffect(() => {
    getPopular(page).then(data => {
      if (films.length < data.total_results) {
        setFilms(data.results);
      }
    });
  }, []);

  //возврат к просмотренному фильму
  useEffect(() => {
    if (!isFromDataState) {
      return;
    }
    if (idItem && films.length > 0) {
      const selector = `[data-type="${idItem}"]`;
      const viewItem = document.querySelector(selector);
      if (viewItem) {
        viewItem.scrollIntoView(false);
      }
      onClearState();
    }
  }, [films]);

  return (
    <>
      <Title>Top rates</Title>
      {films.length > 0 && <MoviesList films={films} />}
    </>
  );
}
