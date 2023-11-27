import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainBar from '../components/elements/body_div/MainBar';
import './App.css'

const App: React.FC = () => {
  return (
      <Routes>
        <Route
          path="/"
          element={
            <div className="Body">
              <div className="body_div">
                <h2>Просим прощения. Ведутся техничиские работы. По окончании мы вас уведомим.</h2>
                <h3>Пока посмотрите на процессор, материнскую плату и красивый rgb кулер:</h3>
                <MainBar />
              </div>
            </div>
          }
        />
      </Routes>
  );
};

export default App;