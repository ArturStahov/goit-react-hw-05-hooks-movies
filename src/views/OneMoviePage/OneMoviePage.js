import { useState, useEffect } from 'react';
import fetchOneMovies from '../../service/fetchOneMovies';
import Section from '../../components/Section/Section';
import OneMovieDetails from '../../components/OneMovieDetails/OneMovieDetails';
import CastBlock from '../../components/CastBlock/CastBlock';
import ReviewsBlocks from '../../components/ReviewsBlock/ReviewsBlock';
import { Route, useParams, useRouteMatch } from 'react-router-dom';

export default function OneMoviesPage() {
  const [movie, setMovie] = useState(null);
  const { movieID } = useParams();
  const { path } = useRouteMatch();

  useEffect(() => {
    fetchOneMovies(movieID).then(data => setMovie(data));
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
