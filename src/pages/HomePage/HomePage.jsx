import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import s from "./HomePage.module.css";
import { fetchFilm } from "../../services/api";
const HomePage = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchFilm();
      setFilms(data);
    };
    getData();
  }, []);
  return (
    <>
      <h1 className={s.title}>Trending today:</h1>
      <MovieList films={films} />
    </>
  );
};

export default HomePage;
