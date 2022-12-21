import { Trash } from "phosphor-react";
import { FormEvent } from "react";
import style from "./Task.module.css";

interface Task {
  content: string;
  onDelete: (task: string) => void;
  onCompletedTasks: (tasksCompleted: number) => void;
}

export function Task({ content, onDelete, onCompletedTasks }: Task) {
  function handleDeleteTask() {
    onDelete(content);
  }
  function handleCompletedTask(event: FormEvent) {
    let completedTask = 0;
    event.target.checked
      ? (completedTask = completedTask + 1)
      : (completedTask = completedTask - 1);

    onCompletedTasks(completedTask);
  }
  return (
    <main className={style.Task}>
      <div className={style.Box}>
        <label>
          <input
            type="checkBox"
            id="checkBox"
            className={style.checkBox}
            onClick={handleCompletedTask}
          />
          <span className={style.check}></span>
        </label>
      </div>
      <div className={style.textTask}>
        <p>{content}</p>
      </div>
      <button
        className={style.trash}
        onClick={handleDeleteTask}
        title="Deletar Tarefa"
      >
        <Trash size={24} />
      </button>
    </main>
  );
}
