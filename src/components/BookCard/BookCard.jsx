import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import ImageElem from "../UI/ImageElem/ImageElem";
import EllipsisText from "../UI/EllipsisText/EllipsisText";
import ModalWrapper from "../UI/ModalWrapper/ModalWrapper";
import BookModal from "../BookModal/BookModal";
import DeleteButton from "../DeleteButton/DeleteButton";
import {
  addBookFromRecommend,
  removeBook,
} from "../../redux/favorites/operations";
import {
  successNotify,
  errNotify,
} from "../../auxiliary/notification/notification";
import css from "./BookCard.module.css";

const BookCard = ({ book }) => {
  const { _id, title, author, imageUrl } = book;
  const [showBookModal, setShowBookModal] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const isLibrary = location.pathname !== "/library";

  const handleBookModaleClose = () => {
    setShowBookModal(false);
  };
  const handleBookModaleOpen = () => {
    console.log("handleBookModaleOpen");
    setShowBookModal(true);
  };

  const handleAddBook = () => {
    dispatch(addBookFromRecommend(_id))
      .unwrap()
      .then(() => {
        successNotify("Success added book");
      })
      .catch(() => {
        errNotify("Error in adding book");
      });
    handleBookModaleClose();
  };

  const handleDelete = () => {
    dispatch(removeBook(_id))
      .then(() => {
        successNotify("Success remove book");
      })
      .catch(() => {
        errNotify("Error removing book");
      });
  };

  return (
    <div className={css.container}>
      <ImageElem
        imgUrl={imageUrl}
        altText={title}
        onClick={handleBookModaleOpen}
      />
      <div className={css.wrapper}>
        <div className={css.infoContainer}>
          <EllipsisText text={title} maxLines={1} className={css.title} />
          <p className={css.author}>{author}</p>
        </div>
        {isLibrary && <DeleteButton handleClick={handleDelete} />}
      </div>
      {showBookModal && (
        <ModalWrapper onClose={handleBookModaleClose}>
          <BookModal book={book} handleAddBook={handleAddBook}></BookModal>
        </ModalWrapper>
      )}
    </div>
  );
};

export default BookCard;
