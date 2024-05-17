import React from 'react';
import './index.css';
import Home from './Pages/Home/HomePage';
import MiniDrawer from '../src/Pages/Dashboard/MiniDrawer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactForm from './Pages/ContactForm/ContactForm';
import RegisterUser from './Pages/UserRegistration/RegisterUser';
import LoginUser from './Pages/UserRegistration/LoginUser';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<MiniDrawer />}>
          <Route path="contact" element={<ContactForm />} />
        </Route>
        <Route path="signup" element={<RegisterUser />} />
        <Route path="login" element={<LoginUser />} />
      </Routes>
    </Router>
  );
}

export default App;
