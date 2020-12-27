import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCastDetails } from '../../service/fetchApi';
import createImgUrl from '../../service/createImgUrl';
import DefaultImage from '../../img/default-image.jpg';
import { ListCast, CastItem, CastImage } from './styledComponent';

export default function CastBlocks() {
  const [cast, setCast] = useState(null);
  const { movieID } = useParams();

  useEffect(() => {
    getCastDetails(movieID).then(data => setCast(data.cast));
  }, []);

  return (
    <>
      {cast && (
        <ListCast>
          {cast.map(({ name, profile_path, id }) => (
            <CastItem key={id}>
              <h3>{name}</h3>
              <CastImage
                src={profile_path ? createImgUrl(profile_path) : DefaultImage}
                alt={name}
              />
            </CastItem>
          ))}
        </ListCast>
      )}
    </>
  );
}
