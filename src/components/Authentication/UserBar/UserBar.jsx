import { useSelector } from "react-redux";
import LogoutButton from "../LogoutButton/LogoutButton";
import MobileMenuBtn from "../MobileMenuBtn/MobileMenuBtn";
import {
  selectIsLoggedIn,
  selectUserName,
} from "../../../redux/auth/selectors";
import css from "./UserBar.module.css";

const UserBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUserName);

  if (!isLoggedIn) return null;

  return (
    <div className={css.container}>
      <div className={css.userNameContainer}>
        <span className={css.letter}>I</span>
        <span className={css.userName}>{userName}</span>
      </div>
      <div className={css.logoutWrapper}>
        <LogoutButton />
      </div>
      <MobileMenuBtn />
    </div>
  );
};

export default UserBar;
