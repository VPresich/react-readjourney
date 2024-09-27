import { useDispatch } from "react-redux";
import Logo from "../../components/Logo/Logo";
import AuthTitle from "../../components/Authentication/AuthTitle/AuthTitle";
import {
  errNotify,
  successNotify,
} from "../../auxiliary/notification/notification";
import {
  ERR_REGISTRATION,
  SUCCESS_REGISTRATION,
} from "../../components/Authentication/Forms/constants";
import { register } from "../../redux/auth/operations";
import DocumentTitle from "../../components/DocumentTitle";
import ResponsiveImage from "../../components/UI/ResponsiveImg/ResponsiveImg";
import RegisterForm from "../../components/Authentication/Forms/RegisterForm/RegisterForm";

import imgDesktop1x from "../../assets/img/authentication/iPhone_desktop@1x.png";
import imgDesktop2x from "../../assets/img/authentication/iPhone_desktop@2x.png";
import imgMobile1x from "../../assets/img/authentication/iPhone_mobile@1x.png";
import imgMobile2x from "../../assets/img/authentication/iPhone_mobile@2x.png";

import css from "./RegisterPage.module.css";

const imageData = {
  imgDesktop1x,
  imgDesktop2x,
  imgMobile1x,
  imgMobile2x,
  altText: "iPhone photo",
};

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleRegister = (values) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        successNotify(SUCCESS_REGISTRATION);
      })
      .catch((error) => {
        console.log(error);
        errNotify(ERR_REGISTRATION);
      });
  };
  return (
    <>
      <DocumentTitle>Register Page</DocumentTitle>
      <section className={css.section}>
        <div className={css.container}>
          <div className={css.formContainer}>
            <div className={css.titleContainer}>
              <Logo />
              <AuthTitle />
            </div>
            <RegisterForm handleRegister={handleRegister} />
          </div>
          <div className={css.imgContainer}>
            <ResponsiveImage imageData={imageData} />
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterPage;
