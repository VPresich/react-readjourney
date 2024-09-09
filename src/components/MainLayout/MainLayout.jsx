import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// import { errNotify } from "../../auxiliary/notification/notification";
import { selectIsRefreshing } from "../../redux/auth/selectors";
// import { refreshUser } from "../../redux/auth/operations";
// import { resetRefreshState } from "../../redux/auth/slice";
// import AppBar from "../AppBar/AppBar";
import Loader from "../../components/UI/Loader/Loader";

import css from "./MainLayout.module.css";

const MainLayout = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    // dispatch(refreshUser())
    //   .unwrap()
    //   .catch(() => {})
    //   .finally(() => {
    //     dispatch(resetRefreshState());
    //   });
  }, [dispatch]);

  return (
    <div className={css.container}>
      {isRefreshing ? (
        <Loader />
      ) : (
        <>
          {/* <AppBar /> */}
          <header>
            <p>App Bar</p>
          </header>
          <main>
            <p>Main Layout</p>
            <Outlet />
          </main>

          <Toaster position="top-right" reverseOrder={false} />
        </>
      )}
    </div>
  );
};

export default MainLayout;
