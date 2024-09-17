import { useRef, useEffect } from "react";
import UserNav from "../Authentication/UserNav/UserNav";
import UserBar from "../Authentication/UserBar/UserBar";
import Logo from "../Logo/Logo";
import css from "./AppBar.module.css";

const AppBar = () => {
  const headerRef = useRef(null);
  const containerRef = useRef(null);

  const handleScroll = () => {
    if (headerRef.current && containerRef.current) {
      const scrollPos = window.scrollY;
      if (scrollPos > 50) {
        headerRef.current.classList.add(css.onscroll);
        containerRef.current.classList.add(css.onscroll);
      } else {
        headerRef.current.classList.remove(css.onscroll);
        containerRef.current.classList.remove(css.onscroll);
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header ref={headerRef} className={css.header}>
      <div ref={containerRef} className={css.container}>
        <Logo />
        <div className={css.navWrapper}>
          <UserNav />
          <UserBar />
        </div>
      </div>
    </header>
  );
};

export default AppBar;
