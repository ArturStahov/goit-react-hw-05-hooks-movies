import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { NavLink } from 'react-router-dom';
import {
  ReleaseData,
  Overlay,
  Title,
  Image,
  ListItem,
  List,
} from './styledComponent';
import DefaultImg from '../../img/default-image.jpg';
import createImgUrl from '../../service/createImgUrl';

export default function MovieList({ films }) {
  const { url } = useRouteMatch();

  return (
    <List>
      {films.map(({ id, original_title, poster_path, release_date }) => (
        <NavLink
          key={id}
          to={{
            pathname: `movies/${id}`,
            state: { url, id },
          }}
        >
          <ListItem data-type={id}>
            <Overlay>
              <Title>{original_title}</Title>
              <ReleaseData>
                {release_date ? release_date.slice(0, 4) : 'no date'}
              </ReleaseData>
            </Overlay>
            <Image
              src={poster_path ? createImgUrl(poster_path) : DefaultImg}
              alt={original_title}
            />
          </ListItem>
        </NavLink>
      ))}
    </List>
  );
}
