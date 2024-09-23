import React from "react";
import clsx from "clsx";
import iconsPath from "../../assets/img/icons.svg";
import css from "./DeleteButton.module.css";

const DeleteButton = ({ handleClick, isSecond = false }) => {
  return (
    <React.Fragment>
      <button
        className={clsx(css.btn, isSecond && css.second)}
        onClick={handleClick}
      >
        <svg
          className={clsx(css.icon, isSecond && css.second)}
          aria-label="trash icon"
        >
          <use href={`${iconsPath}#icon-trash`} />
        </svg>
      </button>
    </React.Fragment>
  );
};

export default DeleteButton;
