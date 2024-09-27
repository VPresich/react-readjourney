import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserBooks } from "../../redux/library/operations";

import Loader from "../../components/UI/Loader/Loader";
import MyLibraryEmpty from "../MyLibraryEmpty/MyLibraryEmpty";
import DropDownSelector from "../UI/DropDownSelector/DropDownSelector";
import { saveBooksStatus } from "../../redux/filters/slice";
import { selectBooksStatus } from "../../redux/filters/selectors";
import {
  selectIsLoading,
  selectError,
  // selectOwnBooks,
  selectFilteredBooks,
} from "../../redux/library/selectors";
import {
  errNotify,
  // successNotify,
} from "../../auxiliary/notification/notification";
import BooksList from "../../components/BooksList/BooksList";
import css from "./MyLibraryBlock.module.css";

const statuses = ["Unread", "In progress", "Done", "All books"];

const MyLibraryBlock = () => {
  const dispatch = useDispatch();
  const books = useSelector(selectFilteredBooks);
  const selectedStatus = useSelector(selectBooksStatus);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getUserBooks())
      .unwrap()
      .then(() => {
        // successNotify("Succes fetch library");
      })
      .catch(() => {
        errNotify("Error fetching library");
      });
  }, [dispatch]);

  const handleFilterChange = (status) => {
    dispatch(saveBooksStatus(status));
  };

  return (
    <div className={css.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <div className={css.titleWrapper}>
            <p className={css.title}>My library</p>{" "}
            <div className={css.filterContainer}>
              <DropDownSelector
                btnLabel={selectedStatus}
                options={statuses}
                selectedOption={selectedStatus}
                onChange={handleFilterChange}
                btnCSSClass={css.btnFilter}
                dropdownCSSClass={css.dropdownFilters}
              />
            </div>
          </div>
          {!error && books && books.length > 0 ? (
            <BooksList books={books} />
          ) : (
            <MyLibraryEmpty />
          )}
        </React.Fragment>
      )}
    </div>
  );
};

export default MyLibraryBlock;
