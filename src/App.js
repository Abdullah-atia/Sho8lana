import React from "react";
import Nav from "./components/Navbar/Navbar2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import NotFound from "./pages/NotFound/NotFound";
import Signup from "./pages/Signup/Signup2";
import Signin from "./pages/Signin/Signin2";
import { Toaster } from "react-hot-toast";
import  Task  from "./pages/Task/Task";



function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Toaster 
       position="bottom-right"
       reverseOrder={false}/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/job" element={<Home />} />
        <Route path="job/:id" element={<Task />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
