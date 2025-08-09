import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SkilligoWelcome from './Components/Pages/SkilligoWelcome';
import LoginPage from './Components/Pages/LoginPage';
import Role from './Components/Pages/Role';
import SignupPage from './Components/Pages/SignupPage';
import Menu from './Components/Pages/Menu';
import SignupPage1 from './Components/Pages/SignupPage1';

import First from './Components/Pages/First';   // Fixed casing to match folder
import Second from './Components/Pages/Second';
import Third from './Components/Pages/Third';

import Menu2 from './Components/Pages/Menu2';
import Menu3 from './Components/Pages/Menu3';
import Menu4 from './Components/Pages/Menu4';

import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SkilligoWelcome />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/role" element={<Role />} />
        <Route path="/signuppage" element={<SignupPage />} />
        <Route path="/signuppage1" element={<SignupPage1 />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/first" element={<First />} />
        <Route path="/second" element={<Second />} />
        <Route path="/third" element={<Third />} />
        <Route path="/menu2" element={<Menu2 />} />
        <Route path="/menu3" element={<Menu3 />} />
        <Route path="/menu4" element={<Menu4 />} />
      </Routes>
    </Router>
  );
};

export default App;
