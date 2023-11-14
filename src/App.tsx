import React from "react";
import Navbar from "./Navbar.tsx";
import Footer from "./components/RedFooter.tsx";
import Result from "./pages/Result.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import SignInPage from "./Login/SignInPage.tsx";
import SignUpPage from './Login/SignUpPage.tsx';
import BreastCancerPage from './pages/BreastCancerPage.tsx';

import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/SignInPage" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Result />} />
          <Route path="/about" element={<About />} />
          <Route path="/breast-cancer" element={<BreastCancerPage />} />
          <Route path="/breast-cancer/Result" element={<Result />} />
        </Routes>
        <Footer/>
      </div>
    </>
  );
};

export default App;
