import { useState, useMemo } from 'react';
import FilmReturnContext from '../service/context';

export default function AuthProviders({ children }) {
  const [idItem, setIdItem] = useState(null);
  const [filmsArr, setFilmsArr] = useState([]);
  const [querySearch, setQuerySearch] = useState('');
  const [pageNumber, setPageNumber] = useState(null);
  const [totalPage, setTotalPage] = useState(1);
  const [isFromDataState, setIsFromDataState] = useState(false);

  const addOnState = (query, pages, totalPage) => {
    setTotalPage(totalPage);
    setQuerySearch(query);
    setPageNumber(pages);
    setIsFromDataState(true);
  };

  const onClearState = () => {
    setIdItem(null);
    setQuerySearch('');
    setPageNumber(null);
    setIsFromDataState(false);
    setTotalPage(1);
  };

  const providerValue = useMemo(() => {
    return {
      idItem,
      querySearch,
      pageNumber,
      isFromDataState,
      onClearState,
      addOnState,
      setIdItem,
      totalPage,
    };
  }, [idItem, querySearch, pageNumber, isFromDataState, totalPage]);

  return (
    <FilmReturnContext.Provider value={providerValue}>
      {children}
    </FilmReturnContext.Provider>
  );
}
