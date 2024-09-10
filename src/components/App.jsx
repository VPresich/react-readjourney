import { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
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
            <RestrictedRoute redirectTo="/" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/" component={<LoginPage />} />}
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

export default App;
