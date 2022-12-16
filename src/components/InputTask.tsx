import style from "./InputTask.module.css";

import { CreateButton } from "./CreateButton";
export function InputTask() {
  return (
    <div className={style.barTask}>
      <textarea
        name="contentTask"
        placeholder="Adicione uma nova Tarefa"
      ></textarea>
      <CreateButton />
    </div>
  );
}
