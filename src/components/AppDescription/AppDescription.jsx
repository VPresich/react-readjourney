import { Link } from "react-router-dom";
import iconsPath from "../../assets/img/icons.svg";
import css from "./AppDescription.module.css";
const AppDescription = () => {
  return (
    <div className={css.container}>
      <h3 className={css.title}>Start your workout</h3>

      <div className={css.itemsWrapper}>
        <div className={css.itemContainer}>
          <span className={css.number}>1</span>
          <p className={css.item}>
            Create a personal library:{" "}
            <span className={css.subitem}>
              add the books you intend to read to it.
            </span>
          </p>
        </div>

        <div className={css.itemContainer}>
          <span className={css.number}>2</span>
          <p className={css.item}>
            Create your first workout:{" "}
            <span className={css.subitem}>
              define a goal, choose a period, start training.
            </span>
          </p>
        </div>
      </div>
      <Link className={css.link} to="/library">
        <span>My library</span>
        <span className={css.iconContainer}>
          <svg className={css.icon} aria-label="arrow icon">
            <use href={`${iconsPath}#icon-arrow-right`} />
          </svg>
        </span>
      </Link>
    </div>
  );
};

export default AppDescription;
