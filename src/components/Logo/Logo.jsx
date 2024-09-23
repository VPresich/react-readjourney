import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import iconsPath from "../../assets/img/icons.svg";
import css from "./Logo.module.css";

const Logo = () => {
  const location = useLocation();
  const unDisplayText =
    location.pathname === "/recommended" || location.pathname == "/library";
  return (
    <Link to="/recommended" className={css.link}>
      <div className={css.iconContainer}>
        <svg className={css.icon} aria-label="Open book icon">
          <use href={`${iconsPath}#icon-logo`} />
        </svg>
      </div>
      <span className={clsx(css.logoText, unDisplayText && css.noDisplay)}>
        read journey
      </span>
    </Link>
  );
};

export default Logo;
