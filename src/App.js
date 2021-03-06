import { Suspense, lazy } from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';

import { Switch, Route } from 'react-router-dom';
import PageHeader from './components/PageHeader/PageHeader';
import PageMain from './components/PageMain/PageMain';
import PageNav from './components/PageNav/PageNav';
import NotFound from './views/NotFound/NotFound';
import Spinner from './components/Spiner/Spiner';
import AnimationBackground from './components/AnimationBackground/AnimationBackground';
import FilmReturnProvider from './context/FilmsReturnProvider';

const HomeView = lazy(() =>
  import('./views/HomePage/HomePage.js' /* webpackChunkName: "home-page" */),
);
const OneMoviePageView = lazy(() =>
  import(
    './views/OneMoviePage/OneMoviePage.js' /* webpackChunkName: "OneMoviePage" */
  ),
);
const MoviesSearchView = lazy(() =>
  import(
    './components/MovieSearch/MovieSearch.jsx' /* webpackChunkName: "MoviesSearch" */
  ),
);
const queryClient = new QueryClient();
export default function App() {
  return (
    <>
      <PageHeader>
        <AnimationBackground />
        <PageNav />
      </PageHeader>
      <PageMain>
        <FilmReturnProvider>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route exact path="/">
                <QueryClientProvider client={queryClient}>
                  <HomeView />
                </QueryClientProvider>
              </Route>
              <Route path="/movies/:movieID">
                <OneMoviePageView />
              </Route>
              <Route path="/movies">
                <MoviesSearchView />
              </Route>
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </Suspense>
        </FilmReturnProvider>
      </PageMain>
    </>
  );
}
