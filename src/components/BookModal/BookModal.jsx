import ImageElem from "../UI/ImageElem/ImageElem";
import Button from "../UI/Button/Button";
import EllipsisText from "../UI/EllipsisText/EllipsisText";
import css from "./BookModal.module.css";

const BookModal = ({ book, handleClick, isLibrary = false }) => {
  const { title, author, imageUrl, totalPages } = book;

  return (
    <div className={css.container}>
      <div className={css.content}>
        <ImageElem imgUrl={imageUrl} altText="Book" auxStyles="middle" />
        <EllipsisText text={title} maxLines={1} className={css.title} />
        <p className={css.author}>{author}</p>
        <p className={css.pages}>{totalPages} pages</p>
      </div>
      <Button
        type="button"
        background="secondary"
        auxStyles={css.button}
        onClick={handleClick}
      >
        {isLibrary ? "Start reading" : "Add to library"}
      </Button>
    </div>
  );
};

export default BookModal;

// const size = ["large",  "small"];
// const background = ["primary", "secondary"];
