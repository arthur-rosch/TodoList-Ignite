import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Task } from "./Task";
import { CreateButton } from "./CreateButton";

import { PlusCircle } from "phosphor-react";

import style from "./TaskList.module.css";

export function TaskList({}) {
  const [tasks, setTask] = useState([""]);
  const [newTaskText, setNewTaskText] = useState(" ");
  let counterTask = tasks.length;

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTask([...tasks, newTaskText]);
  }
  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    console.log(event.target.value);
    setNewTaskText(event.target.value);
  }
  return (
    <div className={style.main}>
      <header>
        <form onSubmit={handleCreateNewTask} className={style.fromTask}>
          <textarea
            name="contentTask"
            onChange={handleNewTaskChange}
            placeholder="Adicione uma nova Tarefa"
          ></textarea>
          <button type="submit" className={style.create}>
            <span>Criar</span>
            <PlusCircle size={20} />
          </button>
        </form>
      </header>
      <main className={style.tasks}>
        <div className={style.tasksDate}>
          <span className={style.tasksCreated}>
            Tarefas Criadas{counterTask}
          </span>

          <span className={style.completedTasks}>Concluídas</span>
        </div>
        <div className={counterTask > 0 ? style.tasksList : style.noTask}>
          <div className={style.task}>
            {tasks.map((comment) => {
              return <Task content={comment} />;
            })}
          </div>
          <footer>
            <img className={style.img} src="src\assets\Clipboard.svg" />
            <div className={style.textDefault}>
              <p>
                <strong>Você ainda não tem tarefas cadastradas </strong>
                <br />
                Crie tarefas e organize seus itens a fazer
              </p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
