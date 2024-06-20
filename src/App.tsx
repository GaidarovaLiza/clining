import style from "./App.module.css";
import { Main } from "./pages/main/Main";
import { AddCountForm } from "./views/AddCountForm";
import { Header } from "./views/header/Header";

function App() {
  return (
    <div className={style.container}>
      <Header />
      <Main />
      <AddCountForm />
    </div>
  );
}

export default App;
