import { useLocation } from "react-router-dom";
import clsx from "clsx";
import css from "./Dashboard.module.css";

const Dashboard = ({ children }) => {
  const location = useLocation();
  const isLibrary = location.pathname === "/library";
  return (
    <div className={clsx(css.container, isLibrary && css.library)}>
      {children}
    </div>
  );
};

export default Dashboard;
