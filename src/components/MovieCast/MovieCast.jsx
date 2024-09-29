import { useParams } from "react-router-dom";
import { fetchFilmByCast } from "../../services/api";
import { useEffect, useState } from "react";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const getDataByCast = async () => {
      const data = await fetchFilmByCast(movieId);
      setActors(data);
    };
    getDataByCast();
  }, [movieId]);

  return (
    <>
      <ul className={s.cast}>
        {actors.map((actor) => (
          <li className={s.card} key={actor.id}>
            <img
              className={s.img}
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
            />
            <div className={s.about}>
              <h2>{actor.name}</h2>
              <p>
                <b className={s.title}>Character: </b> {actor.character}
              </p>
              <p>
                <b className={s.title}>Popularity: </b>
                {Math.round(actor.popularity)} %
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieCast;
