import React from "react";
import "./index.css";
import Home from "./Pages/Home/HomePage";
import MiniDrawer from "../src/Pages/Dashboard/MiniDrawer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterUser from "./Pages/UserRegistration/RegisterUser";
import LoginUser from "./Pages/UserRegistration/LoginUser";
import RecipeReviewCard from "./Pages/CardsComponent/RecipeReviewCard";
import UserProfile from "./Pages/UserProfile/UserProfile";
import AdminLogin from "./Pages/AdminLogin/AdminLogin";
import Unauth from "./Pages/UnAuthorized/Unauth";
import UserGallerySection from "./Pages/Gallery/UserGallerySection";
import SingleNotificationPage from './Pages/NotificationSection/SingleNotificationPage'
import AdminNotification from "./Pages/NotificationSection/AdminNotification";
import AddtoGallery from "./Pages/Gallery/AddtoGallery";
import ContactForm from './Pages/ContactForm/ContactForm'
import EventDetail from "./Pages/Gallery/EventDetail";
import Testimonials from './Pages/Testimonials/Testimonials'
import NotificationCards from './Pages/NotificationSection/NotificationCards'
import Navbar from "./Pages/Home/Components/Navbar";
import AccordionUsage from "./Pages/Home/Components/AccordionUsage";
import Footer from "./Pages/Home/Components/Footer";

function App() {
  return (
    <Router> 
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard/" element={<MiniDrawer />}>
          <Route path="user" element={<RecipeReviewCard />} />
          <Route path="addnotification" element={<AdminNotification/>}/>
          <Route path="addgallery" element={<AddtoGallery/>}/>
        </Route>
        <Route path="card" element={<RecipeReviewCard />} />
        <Route path="signup" element={<RegisterUser />} />
        <Route path="login" element={<LoginUser />} />
        <Route path="admin-login" element={<AdminLogin />} />
        <Route path="faq" element={<AccordionUsage/>}/>
        <Route path="profile/" element={<UserProfile />}>
          <Route path="sendmail" element={<ContactForm/>} />
        </Route>
        <Route path="unauthorized" element={<Unauth />} />
        <Route path="gallery" element={<UserGallerySection/>} />
        <Route path="gallery/:id" element={<EventDetail />} />
        <Route path="notification" element={<NotificationCards/>}/>
        <Route path="notification/:title" element={<SingleNotificationPage/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
