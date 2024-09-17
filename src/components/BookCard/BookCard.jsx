import { useState } from "react";
import clsx from "clsx";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setReadingBook } from "../../redux/reading/slice";
import ImageElem from "../UI/ImageElem/ImageElem";
import EllipsisText from "../UI/EllipsisText/EllipsisText";
import ModalWrapper from "../UI/ModalWrapper/ModalWrapper";
import BookModal from "../BookModal/BookModal";
import ApproveAddModal from "../ApproveAddModal/ApproveAddModal";
import DeleteButton from "../DeleteButton/DeleteButton";
import {
  addBookFromRecommend,
  removeBook,
} from "../../redux/library/operations";
import {
  successNotify,
  errNotify,
} from "../../auxiliary/notification/notification";
import css from "./BookCard.module.css";

const BookCard = ({ book, size = "" }) => {
  const { _id, title, author, imageUrl } = book;
  const [showBookModal, setShowBookModal] = useState(false);
  const [showApproveAddModal, setApproveAddModal] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const location = useLocation();
  const isLibrary = location.pathname === "/library";

  const handleBookModaleClose = () => {
    setShowBookModal(false);
  };

  const handleBookModaleOpen = () => {
    if (size === "small") return;
    setShowBookModal(true);
  };

  const handleApproveAddModalClose = () => {
    setApproveAddModal(false);
  };

  const handleApproveAddModalOpen = () => {
    setApproveAddModal(true);
  };

  const handleAddBook = () => {
    dispatch(addBookFromRecommend(_id))
      .unwrap()
      .then(() => {
        handleApproveAddModalOpen();
        successNotify("Success added book");
      })
      .catch(() => {
        errNotify("Error in adding book");
      });
    handleBookModaleClose();
  };

  const handleStartReading = () => {
    dispatch(setReadingBook(book));
    navigate("/reading");
  };

  const handleDelete = (id) => {
    console.log("handleDelete id: ", id);
    dispatch(removeBook(id))
      .unwrap()
      .then((data) => {
        console.log("My library - books", data);
        successNotify("Success remove book");
      })
      .catch(() => {
        errNotify("Error removing book");
      });
  };

  return (
    <div className={clsx(css.container, size && css[size])}>
      <ImageElem
        imgUrl={imageUrl}
        altText={title}
        onClick={handleBookModaleOpen}
        auxStyles={size}
      />
      <div className={css.wrapper}>
        <div className={css.infoContainer}>
          <EllipsisText
            text={title}
            maxLines={1}
            className={clsx(css.title, size && css[size])}
          />
          <p className={css.author}>{author}</p>
        </div>
        {isLibrary && size !== "small" && (
          <DeleteButton
            handleClick={() => {
              handleDelete(_id);
            }}
          />
        )}
      </div>
      {showBookModal && (
        <ModalWrapper onClose={handleBookModaleClose}>
          <BookModal
            book={book}
            handleClick={isLibrary ? handleStartReading : handleAddBook}
            isLibrary={isLibrary}
          ></BookModal>
        </ModalWrapper>
      )}
      {showApproveAddModal && (
        <ModalWrapper onClose={handleApproveAddModalClose}>
          <ApproveAddModal />
        </ModalWrapper>
      )}
    </div>
  );
};

export default BookCard;
