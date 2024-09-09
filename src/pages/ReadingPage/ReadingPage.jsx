import React from "react";
// import  { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import SearchForm from "../../components/UI/SearchForm/SearchForm";
// import { errNotify } from "../../auxiliary/notification/notification";

import DocumentTitle from "../../components/DocumentTitle";
import css from "./ReadingPage.module.css";

const ReadingPage = () => {
  // const dispatch = useDispatch();
  // const newsList = useSelector(selectNews);
  // const currentPage = useSelector(selectCurrentPage);
  // const totalPages = useSelector(selectTotalPages);
  // const itemsPerPage = useSelector(selectItemsPerPage);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  // const noticesNum = useSelector(selectNewsNumber);
  // const keyword = useSelector(selectKeyword);

  // useEffect(() => {
  //   dispatch(
  //     getNewsWithParams({
  //       page: currentPage,
  //       limit: itemsPerPage,
  //       keyword,
  //     })
  //   )
  //     .unwrap()
  //     .catch(() => {
  //       errNotify("Error fetching");
  //     });
  // }, [dispatch, currentPage, itemsPerPage, keyword]);

  // const handleSearch = (topic) => {
  //   dispatch(setKeyword(topic));
  //   dispatch(setPage(1));
  // };

  // const handleLoadPage = (page) => {
  //   dispatch(setPage(page));
  // };

  return (
    <React.Fragment>
      <DocumentTitle>Reading page</DocumentTitle>
      <section className={css.section}>
        <div className={css.container}>
          <h2 className="visually-hidden"> Reading page</h2>

          <div className={css.catalog}>
            {/* {isLoading ? (
              <p>Loading...</p>
            ) : (
              <>
              
              </>
            )} */}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ReadingPage;
