import { Link } from "react-router-dom";
import iconsPath from "../../assets/img/icons.svg";
import css from "./Logo.module.css";

const Logo = () => {
  return (
    <Link to="/" className={css.link}>
      <div className={css.iconContainer}>
        <svg className={css.icon} aria-label="Open book icon">
          <use href={`${iconsPath}#icon-logo`} />
        </svg>
      </div>
      <span className={css.logoText}>read journey</span>
    </Link>
  );
};

export default Logo;
