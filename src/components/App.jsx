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
        <Route path="/" element={<MainLayout />}>
          <Route path="recommended" element={<RecommendedPage />} />
          <Route path="library" element={<MyLibraryPage />} />
          <Route path="reading" element={<ReadingPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
