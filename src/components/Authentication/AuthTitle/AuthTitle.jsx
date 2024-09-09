import css from "./AuthTitle.module.css";
const AuthTitle = () => {
  return (
    <h2 className={css.title}>
      Expand your mind, reading <span className={css.accent}>a book</span>
    </h2>
  );
};

export default AuthTitle;
