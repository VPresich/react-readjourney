import clsx from "clsx";
import css from "./ImageElem.module.css";

const ImageElem = ({ imgUrl, altText = "", auxStyles = "", onClick }) => {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <div
      className={clsx(css.container, auxStyles && css[auxStyles])}
      onClick={handleClick}
    >
      <img className={css.img} src={imgUrl} alt={`Photo of ${altText}`} />
      <div className={css.darkened}></div>
    </div>
  );
};
export default ImageElem;
