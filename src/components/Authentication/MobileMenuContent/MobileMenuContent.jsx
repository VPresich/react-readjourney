import { NavLink } from "react-router-dom";
import LogoutButton from "../LogoutButton/LogoutButton";
import clsx from "clsx";
import css from "./MobileMenuContent.module.css";

const MobileMenuContent = ({ onMenuClick }) => {
  const classItem = ({ isActive }) => {
    return clsx(css.item, isActive && css.active);
  };
  return (
    <div className={css.mobileContent}>
      <nav className={css.nav}>
        <NavLink className={classItem} to="/recommended" onClick={onMenuClick}>
          Home
        </NavLink>
        <NavLink className={classItem} to="/library" onClick={onMenuClick}>
          My library
        </NavLink>
      </nav>
      <div className={css.outputWrapper}>
        <LogoutButton onClick={onMenuClick} />
      </div>
    </div>
  );
};

export default MobileMenuContent;
