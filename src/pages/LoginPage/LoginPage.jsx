import { useDispatch } from "react-redux";
import Logo from "../../components/Logo/Logo";
import AuthTitle from "../../components/Authentication/AuthTitle/AuthTitle";
import {
  errNotify,
  successNotify,
} from "../../auxiliary/notification/notification";
import {
  SUCCESS_LOGIN,
  ERR_LOGIN,
} from "../../components/Authentication/Forms/constants";

import { logIn } from "../../redux/auth/operations";
import DocumentTitle from "../../components/DocumentTitle";
import ResponsiveImage from "../../components/UI/ResponsiveImg/ResponsiveImg";
import LoginForm from "../../components/Authentication/Forms/LoginForm/LoginForm";

import imgDesktop1x from "../../assets/img/authentication/iPhone_desktop@1x.png";
import imgDesktop2x from "../../assets/img/authentication/iPhone_desktop@2x.png";
import imgMobile1x from "../../assets/img/authentication/iPhone_mobile@1x.png";
import imgMobile2x from "../../assets/img/authentication/iPhone_mobile@2x.png";

import css from "./LoginPage.module.css";

const imageData = {
  imgDesktop1x,
  imgDesktop2x,
  imgMobile1x,
  imgMobile2x,
  altText: "iPhone photo",
};

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = (values) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        successNotify(SUCCESS_LOGIN);
      })
      .catch(() => {
        errNotify(ERR_LOGIN);
      });
  };
  return (
    <>
      <DocumentTitle>Login Page</DocumentTitle>
      <section className={css.section}>
        <div className={css.container}>
          <div className={css.formContainer}>
            <div className={css.titleContainer}>
              <Logo />
              <AuthTitle />
            </div>
            <LoginForm handleLogin={handleLogin} />
          </div>
          <div className={css.imgContainer}>
            <ResponsiveImage imageData={imageData} />
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
