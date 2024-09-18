import clsx from "clsx";

import css from "./ReadingIndicator.module.css";

const ReadingIndicator = ({ isReading = false }) => {
  return (
    <div className={css.container}>
      <span className={clsx(isReading ? css.on : css.off)}></span>
    </div>
  );
};

export default ReadingIndicator;
