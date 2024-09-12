import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRecommendedBooks } from "../../redux/books/operations";
import Loader from "../../components/UI/Loader/Loader";
import {
  selectIsLoading,
  selectBooks,
  selectCurrentBooksPage,
  selectBooksPerPage,
} from "../../redux/books/selectors";
import { selectQuery } from "../../redux/filters/selectors";
import {
  errNotify,
  successNotify,
} from "../../auxiliary/notification/notification";
import BooksList from "../../components/BooksList/BooksList";

import css from "./RecommendedBlock.module.css";
import { selectError } from "../../redux/auth/selectors";

const RecommendedBlock = () => {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);

  const currentPage = useSelector(selectCurrentBooksPage);
  const itemsPerPage = useSelector(selectBooksPerPage);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const query = useSelector(selectQuery);
  console.log("query", query);

  useEffect(() => {
    dispatch(
      getRecommendedBooks({
        page: currentPage,
        limit: itemsPerPage,
        query: query,
      })
    )
      .unwrap(() => {
        successNotify("Succes fetch books");
      })
      .catch(() => {
        errNotify("Error fetching books");
      });
  }, [dispatch, currentPage, itemsPerPage, query]);

  return (
    <div className={css.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <p className={css.title}>Recommended</p>
          {!error && books && books.length > 0 ? (
            <BooksList books={books} />
          ) : (
            <p className={css.error}>Books not found</p>
          )}
        </React.Fragment>
      )}
    </div>
  );
};

export default RecommendedBlock;
