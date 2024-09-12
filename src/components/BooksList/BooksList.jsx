import BookCard from "../../components/BookCard/BookCard";
import css from "./BooksList.module.css";

const BooksList = ({ books }) => {
  return (
    <ul className={css.container}>
      {books.map((book) => (
        <li key={book._id}>
          <BookCard book={book} />
        </li>
      ))}
    </ul>
  );
};

export default BooksList;
