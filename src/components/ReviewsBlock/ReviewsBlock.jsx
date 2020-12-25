import { useState, useEffect } from 'react';
import fetchReview from '../../service/fetchReview';
import { ReviewItem, ListReview } from './styledComponent';
import { useParams } from 'react-router-dom';

export default function ReviewBlocks() {
  const [review, setReview] = useState([]);
  const { movieID } = useParams();

  useEffect(() => {
    fetchReview(movieID).then(data => setReview(data.results));
  });

  return (
    <>
      {review.length > 0 ? (
        <ListReview>
          {review.map(({ author, content, id }) => (
            <ReviewItem key={id}>
              <h3>author: {author}</h3>
              <p>{content}</p>
            </ReviewItem>
          ))}
        </ListReview>
      ) : (
        <p>No Reviews</p>
      )}
    </>
  );
}
