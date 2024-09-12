import React from "react";

import RecommendedBlock from "../../components/RecommendedBlock/RecommendedBlock";
import DocumentTitle from "../../components/DocumentTitle";
import BookFilters from "../../components/BookFilters/BookFilters";
import books from "../../data/books.json";
import css from "./RecommendedPage.module.css";

const RecommendedPage = () => {
  return (
    <React.Fragment>
      <DocumentTitle>Recommended page</DocumentTitle>
      <h2 className="visually-hidden"> Recommended page</h2>
      <BookFilters />
      <RecommendedBlock books={books} />
    </React.Fragment>
  );
};

export default RecommendedPage;
