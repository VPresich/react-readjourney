import clsx from "clsx";
import css from "./ImageElem.module.css";
import img1x from "../../../assets/img/book/library_bookCover@1x.png";
import img2x from "../../../assets/img/book/library_bookCover@2x.png";

const ImageElem = ({ imgUrl, altText = "", auxStyles = "", onClick }) => {
  const handleClick = () => {
    if (onClick) onClick();
  };
  return (
    <div
      className={clsx(css.container, auxStyles && css[auxStyles])}
      onClick={handleClick}
    >
      <img
        className={css.img}
        src={imgUrl || img1x}
        srcSet={!imgUrl && `${img1x} 1x, ${img2x} 2x`}
        alt={`Photo of ${altText}`}
      />
      <div className={css.darkened}></div>
    </div>
  );
};
export default ImageElem;
