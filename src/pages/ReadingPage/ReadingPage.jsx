import React from "react";
import { useSelector } from "react-redux";
import {
  selectReadingBook,
  selectReadingBookStatus,
  selectTimeLeftToRead,
  selectBookProgress,
} from "../../redux/reading/selectors";
import ProgressBlock from "../../components/ProgressBlock/ProgressBlock";
import ReadingStatistic from "../../components/ReadingStatistic/ReadingStatistic";
import AddReading from "../../components/AddReading/AddReading";
import Dashboard from "../../components/Dashboard/Dashboard";
import MyReadingBlock from "../../components/MyReadingBlock/MyReadingBlock";
import DocumentTitle from "../../components/DocumentTitle";

const ReadingPage = () => {
  const readingBook = useSelector(selectReadingBook);
  const readingStatus = useSelector(selectReadingBookStatus);
  const initReading = readingStatus === "inactive";
  const timeLeftToRead = useSelector(selectTimeLeftToRead);
  const progress = useSelector(selectBookProgress);
  return (
    <React.Fragment>
      <DocumentTitle>Reading page</DocumentTitle>
      <h2 className="visually-hidden">Reading page</h2>
      <Dashboard>
        <React.Fragment>
          <AddReading book={readingBook} initReading={initReading} />
          {progress.length > 0 ? (
            <ReadingStatistic progress={progress} readingBook={readingBook} />
          ) : (
            <ProgressBlock />
          )}
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
