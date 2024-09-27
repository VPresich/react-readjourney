import React from "react";
import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRecommendedBooks } from "../../redux/books/operations";
import { setPage } from "../../redux/books/slice";
import Loader from "../../components/UI/Loader/Loader";
import PaginationBlock from "../UI/PaginationBlock/PaginationBlock";
import useResponsiveItemsPerPage from "../../hooks/useResponsiveItemsPerPage/useResponsiveItemsPerPage";
import {
  selectIsLoading,
  selectBooks,
  selectCurrentBooksPage,
  selectBooksPerPage,
  selectTotalPages,
} from "../../redux/books/selectors";
import { selectQuery } from "../../redux/filters/selectors";
import {
  errNotify,
  // successNotify,
} from "../../auxiliary/notification/notification";
import BooksList from "../../components/BooksList/BooksList";

import css from "./RecommendedBlock.module.css";
import { selectError } from "../../redux/auth/selectors";

const RecommendedBlock = () => {
  useResponsiveItemsPerPage();
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);
  const currentPage = useSelector(selectCurrentBooksPage);
  const totalPages = useSelector(selectTotalPages);
  const itemsPerPage = useSelector(selectBooksPerPage);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const query = useSelector(selectQuery);

  useEffect(() => {
    dispatch(
      getRecommendedBooks({
        page: currentPage,
        limit: itemsPerPage,
        query: query,
      })
    )
      .unwrap()
      .then(() => {
        // successNotify("Succes fetch books");
      })
      .catch(() => {
        errNotify("Error fetching books");
      });
  }, [dispatch, currentPage, itemsPerPage, query]);

  const handleLoadPage = useCallback(
    (page) => {
      if (page !== currentPage) {
        dispatch(setPage(page));
      }
    },
    [dispatch, currentPage]
  );

  return (
    <div className={css.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <div className={css.firstLine}>
            <p className={css.title}>Recommended</p>
            <PaginationBlock
              totalPages={totalPages}
              currentPage={currentPage}
              onClick={handleLoadPage}
            />
          </div>
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
