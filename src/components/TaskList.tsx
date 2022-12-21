import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Task } from "./Task";

import { PlusCircle } from "phosphor-react";

import style from "./TaskList.module.css";

export function TaskList({}) {
  const [tasks, setTasks] = useState([]);
  const [newTaskText, setNewTaskText] = useState(" ");
  const [tasksCompleted, setTasksCompleted] = useState(0);
  const isNewTaskInputEmpty = newTaskText.length === 0;

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, newTaskText]);
    setNewTaskText("");
  }
  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewTaskText(event.target.value);
  }
  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo e obrigatório");
  }
  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeleteOne = tasks.filter((tasks) => {
      return tasks !== taskToDelete;
    });
    setTasks(tasksWithoutDeleteOne);
    setTasksCompleted(tasksCompleted - 1);
  }
  function completedTasks(taskCompleted: number) {
    setTasksCompleted(tasksCompleted + taskCompleted);
    console.log(taskCompleted);
  }
  return (
    <div className={style.main}>
      <header>
        <form onSubmit={handleCreateNewTask} className={style.fromTask}>
          <textarea
            required
            name="contentTask"
            value={newTaskText}
            onChange={handleNewTaskChange}
            onInvalid={handleNewCommentInvalid}
            placeholder="Adicione uma nova Tarefa"
          ></textarea>
          <button
            type="submit"
            className={style.create}
            disabled={isNewTaskInputEmpty}
          >
            <span>Criar</span>
            <PlusCircle size={20} />
          </button>
        </form>
      </header>
      <main className={style.tasks}>
        <div className={style.tasksDate}>
          <span className={style.tasksCreated}>
            Tarefas Criadas{" "}
            <strong className={style.taskInfo}>{tasks.length}</strong>
          </span>

          <span className={style.completedTasks}>
            Concluídas{" "}
            <strong className={style.taskInfo}>
              {tasksCompleted} de {tasks.length}
            </strong>
          </span>
        </div>
        <div className={tasks.length > 0 ? style.tasksList : style.noTask}>
          <div className={style.task}>
            {tasks.map((comment) => {
              return (
                <Task
                  content={comment}
                  onDelete={deleteTask}
                  onCompletedTasks={completedTasks}
                />
              );
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
