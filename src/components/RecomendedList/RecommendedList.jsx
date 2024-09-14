import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBooksPerPage } from "../../redux/books/operations";
import Loader from "../UI/Loader/Loader";
import iconsPath from "../../assets/img/icons.svg";
import BooksList from "../BooksList/BooksList";
import {
  selectIsLoading,
  selectBooks,
  selectError,
} from "../../redux/books/selectors";
import {
  successNotify,
  errNotify,
} from "../../auxiliary/notification/notification";

import css from "./RecommendedList.module.css";

const RecommendedList = () => {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(
      getBooksPerPage({
        page: 1,
        limit: 3,
      })
    )
      .unwrap(() => {
        successNotify("Succes fetch books");
      })
      .catch(() => {
        errNotify("Error fetching books");
      });
  }, [dispatch]);

  return (
    <div className={css.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <p className={css.title}>Recommended books</p>
          <div className={css.listContainer}>
            {!error && books && books.length > 0 ? (
              <BooksList books={books} small={true} />
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
