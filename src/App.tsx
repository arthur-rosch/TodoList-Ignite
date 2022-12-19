import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";

import style from "./App.module.css";
import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        <TaskList />
      </main>
    </div>
  );
}

export default App;
