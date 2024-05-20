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
function App() {
  return (
      <Router> 
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard/" element={<MiniDrawer />}>
          <Route path="user" element={<RecipeReviewCard />} />
        </Route>
        <Route path="card" element={<RecipeReviewCard />} />
        <Route path="signup" element={<RegisterUser />} />
        <Route path="login" element={<LoginUser />} />
        <Route path="admin-login" element={<AdminLogin />} />
        <Route path="profile/" element={<UserProfile />}>
          <Route path="sendmail" element={<RecipeReviewCard/>} />
        </Route>
        <Route path="unauthorized" element={<Unauth />} />
      </Routes>
    </Router>
  );
}

export default App;
