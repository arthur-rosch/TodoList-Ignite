import { PlusCircle } from "phosphor-react";

import style from "./CreateButton.module.css";

export function CreateButton() {
  return (
    <button type="submit" className={style.create}>
      <span>Criar</span>
      <PlusCircle size={20} />
    </button>
  );
}
