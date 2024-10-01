import { useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchFilmById } from "../../services/api";
import s from "./MovieDetailsPage.module.css";
import clsx from "clsx";

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const goBackRef = useRef(location.state ?? "/");
  useEffect(() => {
    const getDataById = async () => {
      const data = await fetchFilmById(movieId);
      setMovie(data);
    };
    getDataById();
  }, [movieId]);

  if (!movie) return <h2>Loading...</h2>;
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.movie_item, isActive && s.movie_item_active);
  };
  return (
    <>
      <div className={s.card}>
        <img
          className={s.card_img}
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        />
        <div className={s.card_about}>
          <p>
            <b className={s.name}>Name: </b> {movie.title}
          </p>

          <p>
            <b className={s.name}>Date: </b> {movie.release_date}
          </p>

          <span>
            <b className={s.name}> About:</b>
            {movie.overview}
          </span>
          <p>
            <b className={s.name}> For age:</b>
            {movie.adult ? "18+" : "13+"}
          </p>
        </div>
      </div>
      <hr />
      <div className={s.navi}>
        <NavLink to="cast" className={buildLinkClass}>
          Cast
        </NavLink>
        <NavLink to="reviews" className={buildLinkClass}>
          Reviews
        </NavLink>
        <NavLink to={goBackRef.current} className={s.movie_item}>
          Go back
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
