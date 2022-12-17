import { Header } from "./components/Header";
import { InputTask } from "./components/InputTask";
import { Tasks } from "./components/Tasks";

import style from "./App.module.css";
import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <div>
        <InputTask />
      </div>
      <main>
        <Tasks />
      </main>
    </div>
  );
}

export default App;
