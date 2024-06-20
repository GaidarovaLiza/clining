import style from "./App.module.css";
import { Main } from "./pages/main/Main";
import { AddCountForm } from "./views/AddCountForm/AddCountForm";
import { Tariffs } from "./views/Tariffs/Tariffs";
import { Header } from "./views/header/Header";

function App() {
  return (
    <div className={style.container}>
      <Header />
      <Main />
      <AddCountForm />
      <Tariffs/>
    </div>
  );
}

export default App;
