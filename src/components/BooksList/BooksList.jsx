import clsx from "clsx";
import BookCard from "../../components/BookCard/BookCard";
import css from "./BooksList.module.css";

const BooksList = ({ books, small = false }) => {
  return (
    <ul className={clsx(css.container, small && css.small)}>
      {books.map((book) => (
        <li key={book._id}>
          <BookCard book={book} small={small} />
        </li>
      ))}
    </ul>
  );
};

export default BooksList;
