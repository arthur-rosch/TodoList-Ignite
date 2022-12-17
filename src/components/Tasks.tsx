import style from "./Tasks.module.css";
export function Tasks() {
  const zero = 0;
  const um = 1;
  return (
    <div className={style.tasks}>
      <div className={style.tasksDate}>
        <span className={style.tasksCreated}>Tarefas Criadas {zero}</span>
        <span className={style.completedTasks}>Concluídas {um}</span>
      </div>
      <div className={style.tasksContainer}>
        <img src="src\assets\Clipboard.svg" alt="" />
        <div className={style.textDefault}>
          <p>
            <strong>Você ainda não tem tarefas cadastradas </strong>
            <br />
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      </div>
    </div>
  );
}
