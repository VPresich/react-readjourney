import img1x from "../../assets/img/library/library_desktop@1x.png";
import img2x from "../../assets/img/library/library_desktop@2x.png";

import css from "./AppQuote.module.css";
const AppQuote = () => {
  return (
    <div className={css.container}>
      <picture className={css.picture}>
        <source
          media="(min-width: 1440px)"
          srcSet={`${img1x} 1x, ${img2x} 2x`}
        />
        <img src={img1x} alt="books image" loading="lazy" />
      </picture>
      <p className={css.text}>
        &quot;Books are <span className={css.accent}> windows</span> to the
        world, and reading is a journey into the unknown.&quot;
      </p>
    </div>
  );
};

export default AppQuote;
