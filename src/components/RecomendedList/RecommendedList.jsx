import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../UI/Loader/Loader";
import iconsPath from "../../assets/img/icons.svg";
import BooksList from "../BooksList/BooksList";
import {
  selectIsLoading,
  selectBooks,
  selectError,
} from "../../redux/books/selectors";

import css from "./RecommendedList.module.css";

const RecommendedList = () => {
  const books = useSelector(selectBooks);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div className={css.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <p className={css.title}>Recommended books</p>
          <div className={css.listContainer}>
            {!error && books && books.length > 0 ? (
              <BooksList books={books} size="small" maxElem={3} />
            ) : (
              <p className={css.error}>Books not found</p>
            )}
          </div>
          <Link className={css.link} to="/recommended">
            <span>Home</span>
            <span className={css.iconContainer}>
              <svg className={css.icon} aria-label="arrow icon">
                <use href={`${iconsPath}#icon-arrow-right`} />
              </svg>
            </span>
          </Link>
        </React.Fragment>
      )}
    </div>
  );
};

export default RecommendedList;
