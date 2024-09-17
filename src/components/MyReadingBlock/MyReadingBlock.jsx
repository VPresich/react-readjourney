import { useSelector } from "react-redux";
import { selectReadingBook } from "../../redux/reading/selectors";
import BookCard from "../BookCard/BookCard";
import css from "./MyReadingBlock.module.css";

const MyReadingBlock = () => {
  const readingBook = useSelector(selectReadingBook);

  return (
    <div className={css.container}>
      <p className={css.title}>My reading</p>
      <BookCard book={readingBook} />
    </div>
  );
};

export default MyReadingBlock;
