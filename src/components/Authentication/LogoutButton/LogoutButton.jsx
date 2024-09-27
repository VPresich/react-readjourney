import { useDispatch, useSelector } from "react-redux";
import Button from "../../UI/Button/Button";
import { errNotify } from "../../../auxiliary/notification/notification";
import { logOut } from "../../../redux/auth/operations";
import { selectIsLoggedIn } from "../../../redux/auth/selectors";

const LogoutButton = ({ onClick = null }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleButton = () => {
    dispatch(logOut())
      .unwrap()
      .then(() => {
        onClick && onClick();
      })
      .catch(() => {
        errNotify("error logout");
      });
  };

  if (!isLoggedIn) return;

  return (
    <Button onClick={handleButton} size="small" background="secondary">
      Log out
    </Button>
  );
};

export default LogoutButton;
