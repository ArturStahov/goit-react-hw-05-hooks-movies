import { useState, useEffect, useContext } from 'react';
import fetchApiSearch from '../../service/fetchApiSearch';
import MoviesList from '../MoviesList/MoviesList';
import FormSearch from './FormSearch/FormSearch';

import FilmReturnContext from '../../service/context';
import PaginationViews from '../PaginationViews/PaginationViews';

export default function MoviesSearch() {
  const [films, setFilms] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [dataTotal, setDataTotal] = useState(1);
  const {
    querySearch,
    pageNumber,
    isFromDataState,
    onClearState,
    addOnState,
    idItem,
    totalPage,
  } = useContext(FilmReturnContext);

  //берем данные с кеша
  useEffect(() => {
    if (!isFromDataState) {
      return;
    }
    setQuery(querySearch);
    setPage(pageNumber);
    setDataTotal(totalPage);
  }, []);

  //возврат к просмотренному фильму
  useEffect(() => {
    if (!isFromDataState) {
      return;
    }
    if (idItem && films.length > 0) {
      const selector = `[data-type="${idItem}"]`;
      const viewItem = document.querySelector(selector);
      viewItem.scrollIntoView(false);
    }
  }, [films]);

  //кешируем данные
  useEffect(() => {
    if (films.length > 0) {
      addOnState(query, page, dataTotal);
    }
  }, [films, query, page]);

  const fetchApi = () => {
    fetchApiSearch(query, page).then(data => {
      if (films.length < data.total_results) {
        setFilms(data.results);
        setDataTotal(data.total_results);
      }
    });
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    fetchApi();
  }, [query, page]);

  const handlerSearchButton = queryInput => {
    if (!queryInput.trim()) {
      return;
    }
    if (queryInput === query) {
      return;
    }
    onClearState();
    setFilms([]);
    setPage(1);
    setQuery(queryInput);
  };

  const handlerPagination = page => {
    setPage(page);
    onClearState();
  };

  return (
    <>
      <FormSearch onSubmit={handlerSearchButton} />
      {films.length > 0 && <MoviesList films={films} />}
      {films.length > 0 && (
        <PaginationViews
          onHandlerChange={handlerPagination}
          length={dataTotal}
          activePage={page}
        />
      )}
    </>
  );
}
