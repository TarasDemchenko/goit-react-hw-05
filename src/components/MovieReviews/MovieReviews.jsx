import { useParams } from "react-router-dom";
import { fetchFilmByReviews } from "../../services/api";
import { useEffect, useState } from "react";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const getReviews = async () => {
      const data = await fetchFilmByReviews(movieId);
      setReviews(data);
    };
    getReviews();
  }, [movieId]);
  if (!reviews) return <h2>Loading...</h2>;
  return (
    <div>
      <ul>
        {reviews.map((r) => (
          <li key={r.id}>
            <p>{r.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
