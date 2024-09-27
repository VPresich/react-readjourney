import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { selectIsRefreshing } from "../../redux/auth/selectors";

import AppBar from "../AppBar/AppBar";
import Loader from "../../components/UI/Loader/Loader";
import css from "./MainLayout.module.css";

const MainLayout = () => {
  const isRefreshing = useSelector(selectIsRefreshing);

  return (
    <React.Fragment>
      {isRefreshing ? (
        <Loader />
      ) : (
        <React.Fragment>
          <AppBar />
          <main>
            <div className={css.section}>
              <div className={css.container}>
                <Outlet />
              </div>
            </div>
          </main>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default MainLayout;
