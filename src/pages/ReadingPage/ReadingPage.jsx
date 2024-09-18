import React from "react";
import { useSelector } from "react-redux";
import {
  selectReadingBook,
  selectReadingBookStatus,
  selectTimeLeftToRead,
} from "../../redux/reading/selectors";
import ProgressBlock from "../../components/ProgressBlock/ProgressBlock";
import AddReading from "../../components/AddReading/AddReading";
import Dashboard from "../../components/Dashboard/Dashboard";
import MyReadingBlock from "../../components/MyReadingBlock/MyReadingBlock";
import DocumentTitle from "../../components/DocumentTitle";

const ReadingPage = () => {
  const readingBook = useSelector(selectReadingBook);
  const readingStatus = useSelector(selectReadingBookStatus);
  const initReading = readingStatus === "inactive";
  const timeLeftToRead = useSelector(selectTimeLeftToRead);
  console.log("timeLeftToRead", timeLeftToRead);

  return (
    <React.Fragment>
      <DocumentTitle>Recommended page</DocumentTitle>
      <h2 className="visually-hidden"> Recommended page</h2>
      <Dashboard>
        <React.Fragment>
          <AddReading book={readingBook} initReading={initReading} />
          <ProgressBlock />
        </React.Fragment>
      </Dashboard>
      <MyReadingBlock
        book={readingBook}
        initReading={initReading}
        timeLeftToRead={timeLeftToRead}
      />
    </React.Fragment>
  );
};

export default ReadingPage;
