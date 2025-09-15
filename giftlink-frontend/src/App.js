import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage.js';
import LoginPage from './components/LoginPage/LoginPage.js';
import RegisterPage from './components/RegisterPage/RegisterPage.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
function App() {
  const navigate = useNavigate();
  return (
        <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/app" element={<MainPage />} />
          <Route path="/app/login" element={<LoginPage/>} />
          <Route path="/app/register" element={<RegisterPage />} />
        </Routes>
        </>
  );
}
export default App;