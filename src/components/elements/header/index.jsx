import React from "react";
import "./style.css";

const Header = () => {
  return (
    <>
      <div className="top-banner">
        <div className="banner-message message-1">Delivery within 1 day!!!</div>
        <div className="banner-message message-2">Enjoy your fresh eggs</div>
      </div>

      <nav className="navbar">
        <div className="logo">
          <a className="navbar-brand" href="/">
            <img src="/logo.png" alt="Logo" />
          </a>
        </div>

        <ul className="nav-links">
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>

        <div className="nav-icons">
          <a href="#" aria-label="Search">
            🔍
          </a>
          <a href="#" aria-label="Cart">
            🛒
          </a>
          <a href="/login" aria-label="Account">
            👤
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
