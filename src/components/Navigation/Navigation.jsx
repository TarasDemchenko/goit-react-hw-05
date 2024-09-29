import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.home_item, isActive && s.home_item_active);
  };
  return (
    <>
      <header className={s.header}>
        <div className={s.main}>
          <NavLink to="/" className={s.home_title}>
            MetfliX
          </NavLink>
          <div className={s.home_list}>
            <NavLink to="/" className={buildLinkClass}>
              Home
            </NavLink>
            <NavLink to="/movies" className={buildLinkClass}>
              Movies
            </NavLink>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
