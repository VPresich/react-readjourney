import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setItemsPerPage } from "../../redux/books/slice";

const useResponsiveItemsPerPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;

      if (width < 768) {
        dispatch(setItemsPerPage(2));
      } else if (width >= 768 && width < 1440) {
        dispatch(setItemsPerPage(8));
      } else {
        dispatch(setItemsPerPage(10));
      }
    };
    updateItemsPerPage();

    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, [dispatch]);
};

export default useResponsiveItemsPerPage;
