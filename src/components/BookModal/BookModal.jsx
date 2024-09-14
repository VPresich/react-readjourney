import ImageElem from "../UI/ImageElem/ImageElem";
import Button from "../UI/Button/Button";
import EllipsisText from "../UI/EllipsisText/EllipsisText";
import css from "./BookModal.module.css";

const BookModal = ({ book, handleAddBook }) => {
  const { title, author, imageUrl, totalPages } = book;

  return (
    <div className={css.container}>
      <div className={css.content}>
        <ImageElem imgUrl={imageUrl} altText="Book" auxStyles="secondary" />
        <div className={css.info}>
          <EllipsisText text={title} maxLines={1} className={css.title} />
          <p className={css.author}>{author}</p>
          <p className={css.pages}>{totalPages}</p>
        </div>
      </div>
      <Button
        type="button"
        background="secondary"
        auxStyles={css.button}
        onClick={handleAddBook}
      >
        Add to library
      </Button>
    </div>
  );
};

export default BookModal;

// const size = ["large",  "small"];
// const background = ["primary", "secondary"];
