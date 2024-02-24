// Filename - App.js

import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Signin from "./pages/Signin/Signin";
import NotFound from "./pages/NotFound/NotFound";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
