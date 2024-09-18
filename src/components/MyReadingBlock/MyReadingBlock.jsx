import BookCard from "../BookCard/BookCard";
import ReadingIndicator from "../ReadingIndicator/ReadingIndicator";
import css from "./MyReadingBlock.module.css";

const MyReadingBlock = ({ book, initReading = true, timeLeftToRead = "" }) => {
  return (
    <div className={css.container}>
      <div className={css.titleContainer}>
        <p className={css.title}>My reading</p>
        <span className={timeLeftToRead}>{timeLeftToRead}</span>
      </div>
      <div className={css.content}>
        <BookCard book={book} size="large" />
        <ReadingIndicator isReading={initReading} />
      </div>
    </div>
  );
};

export default MyReadingBlock;
