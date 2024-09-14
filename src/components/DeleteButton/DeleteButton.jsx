import React from "react";
import iconsPath from "../../assets/img/icons.svg";
import css from "./DeleteButton.module.css";

const DeleteButton = ({ handleClick }) => {
  return (
    <React.Fragment>
      <button className={css.btn} onClick={handleClick}>
        <svg className={css.icon} aria-label="trash icon">
          <use href={`${iconsPath}#icon-trash`} />
        </svg>
      </button>
    </React.Fragment>
  );
};

export default DeleteButton;
