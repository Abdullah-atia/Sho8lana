import React, { useEffect, Suspense, lazy } from "react";
import Nav from "./components/Navbar/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import TestSignin from "./pages/Signin/TestSignin";
import FreelancerSignup from "./pages/Signup/freelancerSignup";
import { Toaster } from "react-hot-toast";
import Task from "./pages/Task/Task";
import Services from "./pages/MServices/Services";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer/Footer";
import { AdminProvider } from "./Context/AdminContext";
import AdminDashBoard from "./pages/AdminDashBoard/AdminDashBoard";
import AdminProdected from "./components/AdminProdected/AdminProdected";
import PostJob from "./pages/PostJob/PostJob";
import ClientSignup from "./pages/Signup/clientSignup";
import PostCategory from "./pages/PostCategory/PostCategory";
import PostSkill from "./pages/PostCategory/PostSkill";
import { QueryClient, QueryClientProvider } from "react-query";
import Loader from "./components/Loading/Loader";
// import EditProfile from "./pages/Profile/EditProfile";
// import Profile from "./pages/Profile/Profile";

const Profile = lazy(() => import("./pages/Profile/Profile"));
const EditProfile = lazy(() => import("./pages/Profile/EditProfile"));

function App() {
  useEffect(() => {
    AOS.init({
      disable: "mobile",
      offset: 200,
      duration: 600,
      easing: "ease",
      delay: 800,
    });
    // AOS.refresh();
  }, []);
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AdminProvider>
          <BrowserRouter>
            <Nav />
            <Toaster position="bottom-right" reverseOrder={false} />
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route index element={<Home />} />
                <Route path="/job" element={<Home />} />
                <Route path="/service" element={<Services />} />
                <Route path="job/:id" element={<Task />} />
                <Route path="/Profile/:userId" element={<Profile />} />
                <Route path="/EditProfile/:userId" element={<EditProfile />} />

                <Route path="/signin" element={<TestSignin />} />
                <Route path="/clientsignup" element={<ClientSignup />} />
                <Route path="/freesignup" element={<FreelancerSignup />} />
                <Route path="/postJob" element={<PostJob />} />
                <Route path="/postCategory" element={<PostCategory />} />
                <Route path="/postSkill" element={<PostSkill />} />

                {/* <AdminProdected> */}
                <Route
                  path="/admin"
                  element={
                    // <AdminProdected>
                    <AdminDashBoard />
                    // </AdminProdected>
                  }
                />

                {/* </AdminProdected> */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
            {/* <Footer /> */}
          </BrowserRouter>
        </AdminProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
