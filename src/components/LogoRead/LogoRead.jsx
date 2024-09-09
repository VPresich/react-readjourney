import { Link } from "react-router-dom";
import iconsPath from "../../assets/img/icons.svg";
import css from "./LogoRead.module.css";

const LogoRead = () => {
  return (
    <Link to="/home" className={css.link}>
      <svg className={css.icon} aria-label="Open book icon">
        <use href={`${iconsPath}#icon-logo`} />
      </svg>
    </Link>
  );
};

export default LogoRead;
