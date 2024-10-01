import { Field, Form, Formik } from "formik";
import s from "./MoviesPage.module.css";

import { fetchFilmBySearch } from "../../services/api";
import { useEffect, useState } from "react";
import Advertising from "../../components/Advertising/Advertising";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState([]);
  // const [values, setValues] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const searchContent = searchParams.get("query") ?? "";
  const initialValues = {
    query: searchContent,
  };

  useEffect(() => {
    const getDataSearch = async () => {
      if (searchContent) {
        const data = await fetchFilmBySearch(searchContent);

        setSearchQuery(data);
      }
    };
    getDataSearch();
  }, [searchContent]);

  const handlSubmit = (topic) => {
    console.log(topic);
    // setValues(topic.query);
    searchParams.set("query", topic.query);
    setSearchParams(searchParams);
  };

  return (
    <>
      <div className={s.search}>
        <div>
          <h2>Find your perfect movie</h2>
        </div>
        <div className={s.blokInput}>
          <Formik initialValues={initialValues} onSubmit={handlSubmit}>
            <Form>
              <Field name="query" className={s.input} />
              <button className={s.button} type="submit">
                Search
              </button>
            </Form>
          </Formik>
        </div>
      </div>

      {searchQuery.length > 0 ? (
        <MovieList films={searchQuery} />
      ) : (
        <Advertising />
      )}
    </>
  );
};

export default MoviesPage;
