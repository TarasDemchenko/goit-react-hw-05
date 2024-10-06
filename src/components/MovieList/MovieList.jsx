import { useEffect, useState } from "react";
import s from "./MovieList.module.css";
// import { fetchFilm } from "../../services/api";
import { NavLink, useLocation } from "react-router-dom";

const MovieList = ({ films }) => {
  const location = useLocation();
  // const [films, setFilms] = useState([]);
  // const [error, setError] = useState(false);
  const [active, setActive] = useState(null);
  // const location = useLocation();

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const data = await fetchFilm();
  //       console.log(data);
  //       setFilms(data);
  //       setActive(data[0]);
  //     } catch {
  //       setError(true);
  //       console.log(error);
  //     }
  //   };
  //   getData();
  // }, [error]);

  useEffect(() => {
    if (films.length > 0) {
      setActive(films[0]);
    }
  }, [films]);

  const handleMouseEnter = (film) => {
    setActive(film);
  };

  const handleMouseLeave = () => {
    // if (films.length > 0) {
    //   setActive(films[0]);
    // }
    setActive(films[0]);
  };

  return (
    <div>
      <div className={s.container}>
        <ul>
          {films.map((film) => (
            <li
              key={film.id}
              className={s.li}
              onMouseEnter={() => handleMouseEnter(film)}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink
                to={`/movies/${film.id}`}
                state={location}
                className={`${s.list} ${active === film ? s.listRed : ""}`}
              >
                {film.title}
              </NavLink>
            </li>
          ))}
        </ul>

        {active && (
          <div className={s.poster}>
            <img
              className={s.img}
              src={`https://image.tmdb.org/t/p/w500${active.poster_path}`}
              alt={active.title}
            />
            <p className={s.rating}>
              Rating: {Math.round(active.vote_average)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieList;
