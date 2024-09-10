import { NavLink } from "react-router-dom";
import css from "./UserNav.module.css";
import clsx from "clsx";

const classItem = ({ isActive }) => {
  return clsx(css.item, isActive && css.active);
};

const UserNav = () => {
  return (
    <nav className={css.nav}>
      <NavLink
        className={({ isActive }) => classItem({ isActive })}
        to="/recommended"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => classItem({ isActive })}
        to="/library"
      >
        My library
      </NavLink>
    </nav>
  );
};

export default UserNav;
