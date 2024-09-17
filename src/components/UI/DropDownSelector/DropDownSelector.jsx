import { useState } from "react";
import iconsPath from "../../../assets/img/icons.svg";
import clsx from "clsx";
import css from "./DropDownSelector.module.css";

const DropDownSelector = ({
  btnLabel,
  options,
  selectedOption,
  onChange,
  formControl,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnChange = (event) => {
    const selectedValue = event.target.value;
    if (onChange) onChange(selectedValue);
    if (formControl && formControl.onChange) {
      formControl.onChange(selectedValue);
    }
    setIsOpen(false);
  };

  return (
    <div className={clsx(css.container, className)}>
      <button
        type="button"
        className={clsx(css.btn, { [css.open]: isOpen })}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={css.text}>{btnLabel}</span>
        <div className={css.iconContainer}>
          <svg className={css.icon} aria-label="arrow icon">
            <use href={`${iconsPath}#icon-dropdown`} />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className={css.dropdownWrapper}>
          <div className={css.dropdown}>
            {options.map((option, index) => (
              <label
                key={index}
                className={clsx(css.option, {
                  [css.selected]:
                    selectedOption?.toLowerCase() === option.toLowerCase(),
                  [css.inactive]:
                    selectedOption?.toLowerCase() !== option.toLowerCase(),
                })}
              >
                <input
                  type="radio"
                  value={option}
                  checked={
                    selectedOption?.toLowerCase() === option.toLowerCase()
                  }
                  onChange={handleOnChange}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDownSelector;
