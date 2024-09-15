import React from "react";
import MyLibraryBlock from "../../components/MyLibraryBlock/MyLibraryBlock";
import RecommendedList from "../../components/RecomendedList/RecommendedList";
import AddBook from "../../components/AddBook/AddBook";
import Dashboard from "../../components/Dashboard/Dashboard";
import DocumentTitle from "../../components/DocumentTitle";

const MyLibraryPage = () => {
  return (
    <React.Fragment>
      <DocumentTitle>Recommended page</DocumentTitle>
      <h2 className="visually-hidden"> Recommended page</h2>
      <Dashboard>
        <React.Fragment>
          <AddBook />
          <RecommendedList />
        </React.Fragment>
      </Dashboard>
      <MyLibraryBlock />
    </React.Fragment>
  );
};

export default MyLibraryPage;
