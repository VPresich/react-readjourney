import imgDesktop1x from "../../assets/img/library/library_desktop@1x.png";
import imgDesktop2x from "../../assets/img/library/library_desktop@2x.png";
import imgMobile1x from "../../assets/img/library/library_mobile@1x.png";
import imgMobile2x from "../../assets/img/library/library_mobile@2x.png";

import ResponsiveImage from "../UI/ResponsiveImg/ResponsiveImg";

import css from "./MyLibraryEmpty.module.css";

const imageData = {
  imgDesktop1x,
  imgDesktop2x,
  imgMobile1x,
  imgMobile2x,
  altText: "Books photo",
};
const MyLibraryError = () => {
  return (
    <div className={css.container}>
      <div className={css.imgContainer}>
        <ResponsiveImage imageData={imageData} />
      </div>
      <p className={css.message}>
        To start training, add{" "}
        <span className={css.accent}>some of your books</span> or from the
        recommended ones
      </p>
    </div>
  );
};

export default MyLibraryError;
