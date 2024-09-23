import { useDispatch } from "react-redux";
import clsx from "clsx";
import DeleteButton from "../DeleteButton/DeleteButton";
import ResponsiveImage from "../UI/ResponsiveImg/ResponsiveImg";

import imgDesktop1x from "../../assets/img/reading/desktop@1x.png";
import imgDesktop2x from "../../assets/img/reading/desktop@2x.png";
import imgMobile1x from "../../assets/img/reading/mobile@1x.png";
import imgMobile2x from "../../assets/img/reading/mobile@2x.png";

import { deleteReading } from "../../redux/reading/operations";
import {
  successNotify,
  errNotify,
} from "../../auxiliary/notification/notification";
import differenceInMinutes from "../../auxiliary/difference";
import dateFormat from "../../auxiliary/dateformat";
import css from "./ReadingStatisticItem.module.css";

const imageData = {
  imgDesktop1x,
  imgDesktop2x,
  imgMobile1x,
  imgMobile2x,
  altText: "Gpaph photo",
};

const ReadingStatisticItem = ({ item, readingBook, isActive = false }) => {
  const { finishPage, finishReading, speed, startPage, startReading } = item;
  const dispatch = useDispatch();
  const { totalPages } = readingBook;
  const handleDelete = () => {
    dispatch(deleteReading({ bookId: readingBook._id, readingId: item._id }))
      .unwrap()
      .then(() => {
        successNotify("Success deleting");
      })
      .catch(() => {
        errNotify("Error deleting");
      });
  };

  return (
    <div className={css.container}>
      <span className={clsx(css.bullet, isActive && css.active)}></span>
      <div className={css.row}>
        <div className={css.firstColumn}>
          <span className={css.date}>{dateFormat(finishReading)}</span>
          <span className={clsx(css.percent, isActive && css.active)}>
            {(((finishPage - startPage) / totalPages) * 100).toFixed(1)} %
          </span>
          <span className={css.time}>
            {differenceInMinutes(startReading, finishReading)} minutes
          </span>
        </div>
        <div className={css.secondColumn}>
          <span className={css.pages}>{finishPage - startPage} pages</span>
          <div className={css.graphWrapper}>
            <div className={css.picture}>
              <ResponsiveImage imageData={imageData} />
            </div>
            <DeleteButton handleClick={handleDelete} isSecond={true} />
          </div>
          <span className={css.speed}>{speed} pages per hour</span>
        </div>
      </div>
    </div>
  );
};
export default ReadingStatisticItem;
