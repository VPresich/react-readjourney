import React from "react";

import RecommendedBlock from "../../components/RecommendedBlock/RecommendedBlock";
import DocumentTitle from "../../components/DocumentTitle";
import Dashboard from "../../components/Dashboard/Dashboard";
import Filters from "../../components/Filters/Filters";
import AppDescription from "../../components/AppDescription/AppDescription";
const RecommendedPage = () => {
  return (
    <React.Fragment>
      <DocumentTitle>Recommended page</DocumentTitle>
      <h2 className="visually-hidden"> Recommended page</h2>
      <Dashboard>
        <React.Fragment>
          <Filters />
          <AppDescription />
        </React.Fragment>
      </Dashboard>
      <RecommendedBlock />
    </React.Fragment>
  );
};

export default RecommendedPage;
