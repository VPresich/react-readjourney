import css from "./Loader.module.css";
import { Triangle } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className={css.container}>
      <Triangle
        visible={true}
        height="100"
        width="100"
        color="var(--blue-color)"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
