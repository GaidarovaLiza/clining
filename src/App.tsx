import style from './App.module.css';
import { Main } from './pages/main/Main';
import { Tariffs } from './views/tariffs/Tariffs';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SendForm from './views/sendForm/SendForm';
import { Header } from './views/header/Header';
import AddCountForm from './views/addCountForm/AddCountForm';
import { useRef } from 'react';
import { ScrollContext } from './context/ScrollContext';

function App() {
  const generalCleaningRef = useRef<HTMLDivElement>(null);
  const maintenanceCleaningRef = useRef<HTMLDivElement>(null);
  const additionCleaningItems = useRef<HTMLDivElement>(null);
  return (
    <div className={style.container}>
      <BrowserRouter>
        <ScrollContext.Provider value={{ generalCleaningRef, maintenanceCleaningRef, additionCleaningItems }}>
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
        </ScrollContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
