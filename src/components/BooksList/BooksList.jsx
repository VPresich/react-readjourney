import clsx from "clsx";
import BookCard from "../../components/BookCard/BookCard";
import css from "./BooksList.module.css";

const BooksList = ({ books, size = "", maxElem = 0 }) => {
  const displayedBooks = maxElem > 0 ? books.slice(0, maxElem) : books;
  return (
    <ul className={clsx(css.container, size && css[size])}>
      {displayedBooks.map((book) => (
        <li key={book._id}>
          <BookCard book={book} size={size} />
        </li>
      ))}
    </ul>
  );
};

export default BooksList;
