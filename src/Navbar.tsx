import React from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import SignInPage from "./Login/SignInPage.tsx";

interface CustomLinkProps {
  to: string;
  children: React.ReactNode;
}

function CustomLink({ to, children, ...props }: CustomLinkProps): React.ReactElement {
  return (
    <li>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

const NavbarButton: React.FC = () => {
  return (
    <Routes>
      <Route path="/SignInPage" element={<SignInPage />} />
    </Routes>
  );
};

const Navbar: React.FC = () => {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        CellsAtWork
      </Link>
      <ul>
        <CustomLink to="/pricing">Breast Cancer Predictor</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/SignInPage">Login</CustomLink>
      </ul>
    </nav>
  );
};

export default Navbar;
