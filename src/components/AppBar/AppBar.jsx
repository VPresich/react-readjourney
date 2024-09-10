import UserNav from "../Authentication/UserNav/UserNav";
import UserBar from "../Authentication/UserBar/UserBar";
import Logo from "../Logo/Logo";
import css from "./AppBar.module.css";
export default function AppBar() {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <Logo />
        <UserNav />
        <UserBar />
      </div>
    </header>
  );
}
