import React, { useState } from "react";
import clsx from "clsx";
import iconsPath from "../../assets/img/icons.svg";
import ReadingStatisticItem from "../ReadingStatisticItem/ReadingStatisticItem";
import PieChart from "../PieChart/PieChart";
import css from "./ReadingStatistic.module.css";

const ReadingStatistic = ({ progress = [], readingBook = {} }) => {
  console.log("ReadingBook", readingBook);
  console.log("progress", progress);
  const [isDiary, setIsDiary] = useState(true);

  const handleClick = () => setIsDiary(!isDiary);

  return (
    <div className={css.container}>
      <div className={css.titleContainer}>
        <h3 className={css.title}>{isDiary ? "Diary" : "Statistics"}</h3>
        <div className={css.buttons}>
          <button className={css.btn} onClick={handleClick}>
            <svg
              className={clsx(css.icon, isDiary && css.active)}
              aria-label="hourglass icon"
            >
              <use href={`${iconsPath}#icon-hourglass`} />
            </svg>
          </button>
          <button className={css.btn} onClick={handleClick}>
            <svg
              className={clsx(css.icon, !isDiary && css.active)}
              aria-label="diagram icon"
            >
              <use href={`${iconsPath}#pie-chart`} />
            </svg>
          </button>
        </div>
      </div>
      {isDiary ? (
        <ul className={css.infoContainer}>
          {progress.map((item, index) => (
            <li key={item._id}>
              {item.status === "inactive" && (
                <ReadingStatisticItem
                  item={item}
                  readingBook={readingBook}
                  isActive={index === 0}
                />
              )}
            </li>
          ))}
        </ul>
      ) : (
        <React.Fragment>
          <p className={css.text}>
            Each page, each chapter is a new round of knowledge, a new step
            towards understanding. By rewriting statistics, we create our own
            reading history.
          </p>
          <div className={css.pieContainer}>
            <PieChart percentage={20} />
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default ReadingStatistic;
