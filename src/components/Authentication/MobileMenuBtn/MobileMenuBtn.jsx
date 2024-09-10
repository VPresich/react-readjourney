import React, { useState } from "react";
import iconsPath from "../../../assets/img/icons.svg";
import MobileMenuContent from "../MobileMenuContent/MobileMenuContent";
import clsx from "clsx";
import css from "./MobileMenuBtn.module.css";

const MobileMenuBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <button className={css.burgerBtn} onClick={handleClick}>
        <svg className={css.container} aria-label="burger menu button">
          <use className={css.icon} href={`${iconsPath}#icon-mobile-menu`} />
        </svg>
      </button>
      <div
        className={clsx(css.mobileMenu, {
          [css.open]: isOpen,
        })}
      >
        <button className={css.closeBtn} onClick={handleClick}>
          <svg className={css.closeIcon} aria-label="close menu button">
            <use href={`${iconsPath}#icon-x-close`} />
          </svg>
        </button>
        <MobileMenuContent onMenuClick={handleClick} />
      </div>
    </React.Fragment>
  );
};

export default MobileMenuBtn;
