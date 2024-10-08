import { useState } from "react";
import clsx from "clsx";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsDone,
  selectBookInLibrary,
} from "../../redux/library/selectors";
import { setReadingBook } from "../../redux/reading/slice";
import ImageElem from "../UI/ImageElem/ImageElem";
import EllipsisText from "../UI/EllipsisText/EllipsisText";
import ModalWrapper from "../UI/ModalWrapper/ModalWrapper";
import BookModal from "../BookModal/BookModal";
import ApproveAddModal from "../ApproveAddModal/ApproveAddModal";
import ApproveReadModal from "../ApproveReadModal/ApproveReadModal";
import DeleteButton from "../DeleteButton/DeleteButton";
import {
  addBookFromRecommend,
  removeBook,
} from "../../redux/library/operations";
import {
  // successNotify,
  errNotify,
} from "../../auxiliary/notification/notification";
import css from "./BookCard.module.css";

const BookCard = ({ book, size = "" }) => {
  const { _id, title, author, imageUrl } = book;
  const [showBookModal, setShowBookModal] = useState(false);
  const [showApproveAddModal, setApproveAddModal] = useState(false);
  const [showApproveReadModal, setApproveReadModal] = useState(false);

  const navigate = useNavigate();
  const isDone = useSelector((state) => selectIsDone(state, book._id));
  const isBookInLibrary = useSelector((state) =>
    selectBookInLibrary(state, book)
  );

  const dispatch = useDispatch();
  const location = useLocation();
  const isLibrary = location.pathname === "/library";
  const isReading = location.pathname === "/reading";

  const handleBookModaleClose = () => {
    setShowBookModal(false);
  };

  const handleBookModaleOpen = () => {
    if (size === "small") return;
    if (isReading) return;
    setShowBookModal(true);
  };

  const handleApproveAddModalClose = () => {
    setApproveAddModal(false);
  };

  const handleApproveAddModalOpen = () => {
    setApproveAddModal(true);
  };

  const handleApproveReadModalClose = () => {
    setApproveReadModal(false);
  };

  const handleAddBook = () => {
    if (isBookInLibrary) {
      errNotify("This book is already in the library.");
      return;
    }
    dispatch(addBookFromRecommend(_id))
      .unwrap()
      .then(() => {
        handleApproveAddModalOpen();
      })
      .catch(() => {
        errNotify("Error in adding book");
      });
    handleBookModaleClose();
  };

  const handleStartReading = () => {
    if (isDone) {
      setApproveReadModal(true);
    } else {
      dispatch(setReadingBook(book));
      navigate("/reading");
    }
  };

  const handleDelete = (id) => {
    dispatch(removeBook(id))
      .unwrap()
      .then(() => {
        // successNotify("Success remove book");
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
        <div className={clsx(css.infoContainer, size && css[size])}>
          <EllipsisText
            text={title}
            maxLines={size === "large" ? 2 : 1}
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
      {showApproveReadModal && (
        <ModalWrapper onClose={handleApproveReadModalClose}>
          <ApproveReadModal />
        </ModalWrapper>
      )}
    </div>
  );
};

export default BookCard;
