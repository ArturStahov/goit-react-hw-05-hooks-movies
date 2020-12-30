import React from 'react';
import { useRouteMatch, useLocation } from 'react-router-dom';
import slugify from 'slugify';

import { NavLink } from 'react-router-dom';
import {
  ReleaseData,
  FrontItem,
  Title,
  Image,
  ListItem,
  List,
  BackItem,
} from './styledComponent';
import DefaultImg from '../../img/default-image.jpg';
import createImgUrl from '../../service/createImgUrl';

export default function MovieList({ films }) {
  console.log(films);
  const { url } = useRouteMatch();
  const location = useLocation();
  let urlParams = new URLSearchParams(location.search).get('query'); // получаем  значениt параметров запроса с адресной строки
  console.log(urlParams);

  const makeSlug = string =>
    slugify(string, {
      replacement: '-', // replace spaces with replacement character, defaults to `-`
      remove: ':', // remove characters that match regex, defaults to `undefined`
      lower: true, // convert to lower case, defaults to `false`
      strict: false, // strip special characters except replacement, defaults to `false`
      locale: 'vi', // language code of the locale to use
    });

  return (
    <List>
      {films.map(
        ({
          id,
          original_title,
          poster_path,
          release_date,
          vote_average,
          backdrop_path,
        }) => (
          <NavLink
            key={id}
            to={{
              pathname: `movies/${makeSlug(`${original_title}-${id}`)}`,
              state: { url, id },
            }}
          >
            <ListItem data-type={id}>
              <FrontItem className="front">
                <Image
                  src={poster_path ? createImgUrl(poster_path) : DefaultImg}
                  alt={original_title}
                />
                <Title>{original_title}</Title>
                <ReleaseData>
                  {release_date ? release_date.slice(0, 4) : 'no date'}
                </ReleaseData>
              </FrontItem>
              <BackItem className="back">
                <Image
                  src={backdrop_path ? createImgUrl(backdrop_path) : DefaultImg}
                  alt={original_title}
                />
                <Title>rating:{vote_average}</Title>
              </BackItem>
            </ListItem>
          </NavLink>
        ),
      )}
    </List>
  );
}
