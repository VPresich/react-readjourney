import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserBooks } from "../../redux/library/operations";
import Loader from "../../components/UI/Loader/Loader";
import MyLibraryEmpty from "../MyLibraryEmpty/MyLibraryEmpty";
import {
  selectIsLoading,
  selectError,
  selectOwnBooks,
} from "../../redux/library/selectors";
import {
  errNotify,
  successNotify,
} from "../../auxiliary/notification/notification";
import BooksList from "../../components/BooksList/BooksList";
import css from "./MyLibraryBlock.module.css";

const MyLibraryBlock = () => {
  const dispatch = useDispatch();
  const books = useSelector(selectOwnBooks);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getUserBooks())
      .unwrap()
      .then((data) => {
        console.log(data);
        successNotify("Succes fetch library");
      })
      .catch(() => {
        errNotify("Error fetching library");
      });
  }, [dispatch]);

  return (
    <div className={css.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <p className={css.title}>My library</p>
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
