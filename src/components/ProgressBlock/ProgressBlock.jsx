import img1x from "../../assets/img/reading/img@1x.png";
import img2x from "../../assets/img/reading/img@2x.png";

import css from "./ProgressBlock.module.css";

const ProgressBlock = () => {
  return (
    <div className={css.container}>
      <h3 className={css.title}>Progress</h3>
      <p className={css.subTitle}>
        Here you will see when and how much you read. To record, click on the
        red button above.
      </p>

      <div className={css.imgWrapper}>
        <picture>
          <source srcSet={`${img1x} 1x, ${img2x} 2x`} />
          <img src={img1x} alt="Star image" loading="lazy" />
        </picture>
      </div>
    </div>
  );
};

export default ProgressBlock;
