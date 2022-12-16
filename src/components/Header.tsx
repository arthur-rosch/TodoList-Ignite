import style from "./Header.module.css";
import ToDoLogo from "../assets/Logo.svg";
export function Header() {
  return (
    <header className={style.header}>
      <img src={ToDoLogo} alt="Logo ToDoList" />
    </header>
  );
}
