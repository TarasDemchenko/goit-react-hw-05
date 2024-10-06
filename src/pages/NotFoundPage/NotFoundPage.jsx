import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={s.notFound}>
      <h1>Sorry but page is not found.</h1>
      <Link to="/" className={s.button}>
        Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
