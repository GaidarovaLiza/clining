import style from './App.module.css';
import { Main } from './pages/main/Main';
import { AddCountForm } from './views/addCountForm/AddCountForm';
import { Tariffs } from './views/Tariffs/Tariffs';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SendForm from './views/sendForm/SendForm';
import { Header } from './views/header/Header';

function App() {
  return (
    <div className={style.container}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main />
                <AddCountForm />
                <Tariffs />
              </>
            }
          />
          <Route path="/send-form" element={<SendForm />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
