import { useLocation } from "react-router-dom";
import clsx from "clsx";
import AppNav from "../AppNav/AppNav";
import AuthMenu from "../Authentication/AuthMenu/AuthMenu";
import MobileMenuBtn from "../Authentication/MobileMenuBtn/MobileMenuBtn";
import LogoRead from "../LogoRead/LogoRead";

import css from "./AppBar.module.css";

export default function AppBar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/home";
  return (
    <header className={clsx(css.header, isHomePage && css.home)}>
      {/* <Logo /> */}

      <LogoRead />

      <AppNav />
      <div className={css.wrapper}>
        <AuthMenu />
        <MobileMenuBtn />
      </div>
    </header>
  );
}
