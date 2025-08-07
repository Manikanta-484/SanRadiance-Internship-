import React from "react";
import { useNavigate } from "react-router-dom";
import '../Header.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="logo">🔷</div>
      <nav className="nav">
        <a href="/">Pricing</a>
        <a href="/">Customers</a>
        <a href="/">Blog</a>
        <a href="/">Docs</a>
        <a href="/">Extra</a>
      </nav>
      <div className="auth-buttons">
        <button className="login" onClick={() => navigate("/login")}>Login</button>
        <button className="register" onClick={() => navigate("/register")}>Register</button>
      </div>
    </header>
  );
};

export default Header;
