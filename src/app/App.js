import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RegisterPage from '../pages/adminPage/AdminPage';
import './style.scss';

function App() {
  return (
    <div className="App">
      <RegisterPage />
    </div>
  );
}

export default App;
