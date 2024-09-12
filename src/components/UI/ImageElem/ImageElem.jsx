import css from "./ImageElem.module.css";
const ImageElem = ({ imgUrl, altText = "" }) => {
  return (
    <div className={css.container}>
      <img className={css.img} src={imgUrl} alt={`Photo of ${altText}`} />
      <div className={css.darkened}></div>
    </div>
  );
};
export default ImageElem;
