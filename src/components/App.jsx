import { lazy, Suspense, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import { refreshUser } from "../redux/auth/operations";
import { resetRefreshState } from "../redux/auth/slice";
import MainLayout from "./MainLayout/MainLayout";
import Loader from "./UI/Loader/Loader";
import RestrictedRoute from "./RestrictedRoute";
import PrivateRoute from "./PrivateRoute";

const RecommendedPage = lazy(() =>
  import("../pages/RecommendedPage/RecommendedPage")
);
const MyLibraryPage = lazy(() =>
  import("../pages/MyLibraryPage/MyLibraryPage")
);
const ReadingPage = lazy(() => import("../pages/ReadingPage/ReadingPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser())
      .unwrap()
      .catch(() => {})
      .finally(() => {
        dispatch(resetRefreshState());
      });
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute redirectTo="/register" component={<MainLayout />} />
          }
        >
          <Route
            path="recommended"
            element={
              <PrivateRoute
                redirectTo="/register"
                component={<RecommendedPage />}
              />
            }
          />

          <Route
            path="library"
            element={
              <PrivateRoute
                redirectTo="/register"
                component={<MyLibraryPage />}
              />
            }
          />

          <Route
            path="reading"
            element={
              <PrivateRoute
                redirectTo="/register"
                component={<ReadingPage />}
              />
            }
          />
        </Route>

        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/recommended"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectTo="/recommended"
              component={<LoginPage />}
            />
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster position="top-right" reverseOrder={false} />
    </Suspense>
  );
};

export default App;
