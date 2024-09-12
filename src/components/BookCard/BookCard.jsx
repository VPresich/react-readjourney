import { useState } from "react";
import ImageElem from "../UI/ImageElem/ImageElem";
import EllipsisText from "../UI/EllipsisText/EllipsisText";
import ModalWrapper from "../UI/ModalWrapper/ModalWrapper";
import css from "./BookCard.module.css";

const BookCard = ({ book }) => {
  const { title, author, imageUrl } = book;
  const [showBookModal, setShowBookModal] = useState(false);

  const handleBookModaleClose = () => {
    setShowBookModal(false);
  };
  const handleBookModaleOpen = () => {
    setShowBookModal(true);
  };

  return (
    <div className={css.container}>
      <ImageElem
        imgUrl={imageUrl}
        altText={title}
        onClick={handleBookModaleOpen}
      />
      <div className={css.infoContainer}>
        <EllipsisText text={title} maxLines={1} className={css.title} />
        <p className={css.author}>{author}</p>
      </div>
      {showBookModal && (
        <ModalWrapper onClose={handleBookModaleClose}></ModalWrapper>
      )}
    </div>
  );
};

export default BookCard;
