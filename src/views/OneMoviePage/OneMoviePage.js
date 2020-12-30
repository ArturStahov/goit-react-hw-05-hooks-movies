import { useState, useEffect } from 'react';
import { Route, useParams, useRouteMatch } from 'react-router-dom';
import { getMovieDetails } from '../../service/fetchApi';
import Section from '../../components/Section/Section';
import OneMovieDetails from '../../components/OneMovieDetails/OneMovieDetails';
import CastBlock from '../../components/CastBlock/CastBlock';
import ReviewsBlocks from '../../components/ReviewsBlock/ReviewsBlock';

export default function OneMoviesPage() {
  const [movie, setMovie] = useState(null);
  const { movieID } = useParams();
  const { path } = useRouteMatch();

  useEffect(() => {
    let id = movieID && movieID.match(/[a-z0-9]+$/)[0]; // вытягуем с строки url сгенереной slug наш ид фильма
    console.log(movieID);
    console.log(id);
    getMovieDetails(id).then(data => setMovie(data));
  }, []);

  return (
    <>
      <Section>{movie && <OneMovieDetails movie={movie} />}</Section>
      <Section>
        {movie && (
          <Route exact path={`${path}/cast`}>
            <CastBlock />
          </Route>
        )}
        {movie && (
          <Route exact path={`${path}/reviews`}>
            <ReviewsBlocks />
          </Route>
        )}
      </Section>
    </>
  );
}
