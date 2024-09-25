import ResponsiveImage from "../UI/ResponsiveImg/ResponsiveImg";
import imgDesktop1x from "../../assets/img/library/library_desktop@1x.png";
import imgDesktop2x from "../../assets/img/library/library_desktop@2x.png";
import imgMobile1x from "../../assets/img/library/library_mobile@1x.png";
import imgMobile2x from "../../assets/img/library/library_mobile@2x.png";

import css from "./ApproveReadModal.module.css";
const imageData = {
  imgDesktop1x,
  imgDesktop2x,
  imgMobile1x,
  imgMobile2x,
  altText: "Books photo",
};
const ApproveReadModal = () => {
  return (
    <div className={css.container}>
      <div className={css.imgContainer}>
        <ResponsiveImage imageData={imageData} />
      </div>
      <p className={css.title}>The book is read</p>
      <p className={css.message}>
        It was an <span className={css.accent}>exciting journey</span>, where
        each page revealed new horizons, and the characters became inseparable
        friends.
      </p>
    </div>
  );
};

export default ApproveReadModal;
