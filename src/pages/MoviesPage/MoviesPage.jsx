import { Field, Form, Formik } from "formik";
import s from "./MoviesPage.module.css";

import { fetchFilmBySearch } from "../../services/api";
import { useEffect, useState } from "react";
import Advertising from "../../components/Advertising/Advertising";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState([]);
  // const [values, setValues] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const values = searchParams.get("topis.query") ?? "";
  const initialValues = {
    query: "",
  };

  useEffect(() => {
    const getDataSearch = async () => {
      const data = await fetchFilmBySearch(values);
      setSearchQuery(data);
    };
    getDataSearch();
  }, [values]);

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
          <h2>Find your perfect movie...</h2>
        </div>
        <div>
          <Formik initialValues={initialValues} onSubmit={handlSubmit}>
            <Form>
              <Field name="query" />
              <button type="submit">Search</button>
            </Form>
          </Formik>
        </div>
      </div>
      <Advertising />
    </>
  );
};

export default MoviesPage;
