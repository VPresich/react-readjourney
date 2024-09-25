import ResponsiveImage from "../UI/ResponsiveImg/ResponsiveImg";
import imgDesktop1x from "../../assets/img/library/ok_desktop@1x.png";
import imgDesktop2x from "../../assets/img/library/ok_desktop@2x.png";
import imgMobile1x from "../../assets/img/library/ok_mobile@1x.png";
import imgMobile2x from "../../assets/img/library/ok_mobile@2x.png";
import css from "./ApproveAddModal.module.css";
const imageData = {
  imgDesktop1x,
  imgDesktop2x,
  imgMobile1x,
  imgMobile2x,
  altText: "Ok image",
};
const ApproveAddModal = () => {
  return (
    <div className={css.container}>
      <div className={css.imgContainer}>
        <ResponsiveImage imageData={imageData} />
      </div>
      <p className={css.title}>Good job</p>
      <p className={css.message}>
        Your book is now in <span className={css.accent}>the library!</span> The
        joy knows no bounds and now you can start your training
      </p>
    </div>
  );
};

export default ApproveAddModal;
