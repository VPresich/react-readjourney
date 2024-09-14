import clsx from "clsx";
import css from "./ImageElem.module.css";

const ImageElem = ({ imgUrl, altText = "", secondary = false, onClick }) => {
  return (
    <div
      className={clsx(css.container, secondary && secondary)}
      onClick={onClick}
    >
      <img className={css.img} src={imgUrl} alt={`Photo of ${altText}`} />
      <div className={css.darkened}></div>
    </div>
  );
};
export default ImageElem;
