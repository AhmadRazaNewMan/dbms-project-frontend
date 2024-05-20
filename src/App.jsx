import React from 'react';
import './index.css';

import Home from "./Pages/Home/HomePage";
import MiniDrawer from "../src/Pages/Dashboard/MiniDrawer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import RegistractionPage from './Pages/UserRegistration/RegisterUser'
// import LoginUser from './Pages/UserRegistration/LoginUser'
// import AdminNotification from './Pages/NotificationSection/AdminNotification'
import NotificationSlider from './Pages/NotificationSection/NotificationSlider';
import SingleNotificationPage from './Pages/NotificationSection/SingleNotificationPage';
import UserGallerySection from './Pages/Gallery/UserGallerySection';
import EventDetail from './Pages/Gallery/EventDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<NotificationSlider />} />
        <Route path='notification' element={<SingleNotificationPage />} />
        <Route path='/gallery' element = {<UserGallerySection/>}/>
        <Route path="/event/:id" element={<EventDetail />} />
        {/* <Route path='dashboard' element={<MiniDrawer/>}/> */}
        {/* <Route path='register' element={<register/>}/> */}
      </Routes>
    </Router>
    // <RegistractionPage/>
    // <LoginUser/>
    // <AdminNotification/>
  );
}

export default App;
