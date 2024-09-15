import { useCallback } from "react";
import css from "./PaginationBlock.module.css";
import PaginationButton from "../PaginationButton/PaginationButton";

const PaginationBlock = ({ totalPages, currentPage, onClick }) => {
  const handleClick = useCallback(
    (page) => {
      if (onClick) {
        onClick(page);
      }
    },
    [onClick]
  );

  if (totalPages <= 1) return null;

  return (
    <div className={css.container}>
      <div className={css.prevButtons}>
        <PaginationButton
          text="<"
          iconId="chevron-left"
          onClick={() => handleClick(currentPage - 1)}
          disabled={currentPage === 1}
        />
      </div>
      <div className={css.nextButtons}>
        <PaginationButton
          text=">"
          iconId="chevron-right"
          onClick={() => handleClick(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
      </div>
    </div>
  );
};

export default PaginationBlock;
