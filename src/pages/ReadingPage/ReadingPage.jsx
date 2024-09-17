import React from "react";
// import MyLibraryBlock from "../../components/MyLibraryBlock/MyLibraryBlock";
import ProgressBlock from "../../components/ProgressBlock/ProgressBlock";
import AddReading from "../../components/AddReading/AddReading";
import Dashboard from "../../components/Dashboard/Dashboard";
import MyReadingBlock from "../../components/MyReadingBlock/MyReadingBlock";
import DocumentTitle from "../../components/DocumentTitle";

const ReadingPage = () => {
  return (
    <React.Fragment>
      <DocumentTitle>Recommended page</DocumentTitle>
      <h2 className="visually-hidden"> Recommended page</h2>
      <Dashboard>
        <React.Fragment>
          <AddReading />
          <ProgressBlock />
        </React.Fragment>
      </Dashboard>
      <MyReadingBlock />
    </React.Fragment>
  );
};

export default ReadingPage;
