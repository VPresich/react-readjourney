import css from "./Dashboard.module.css";

const Dashboard = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};

export default Dashboard;
