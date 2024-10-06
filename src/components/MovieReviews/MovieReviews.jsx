import { useParams } from "react-router-dom";
import { fetchFilmByReviews } from "../../services/api";
import { useEffect, useState } from "react";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getReviews = async () => {
      const data = await fetchFilmByReviews(movieId);
      setReviews(data);
      setLoading(false);
    };
    getReviews();
  }, [movieId]);
  if (loading) return <h2>Loading...</h2>;
  if (!reviews) return <h2>No comments yet!</h2>;
  return (
    <>
      <ul>
        {reviews.map((review) => (
          <li key={review.id} className={s.li}>
            <div className={s.blok}>
              <h3 className={s.author}>Author: {review.author}</h3>
              <p className={s.review}>{review.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieReviews;
