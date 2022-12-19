import { Trash } from "phosphor-react";
import style from "./Task.module.css";

interface Task {
  content: string;
}

export function Task({ content }: Task) {
  return (
    <div className={style.Task}>
      <div className={style.checkBox}>
        <input type="checkBox" />
        <span className={style.check}></span>
      </div>
      <div className={style.textTask}>
        <p>{content}</p>
      </div>
      <Trash className={style.trash} size={24} />
    </div>
  );
}
