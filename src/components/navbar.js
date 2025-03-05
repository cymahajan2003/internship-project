import React, { useState } from "react";
import "../styles/navbar.css";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const openMenu = () => setSidebarOpen(true);
  const closeMenu = () => setSidebarOpen(false);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <span style={{ color: "black" }}>DIGI</span>
          <span>DEFENCE</span>
        </div>
        <div className="menu-icon" onClick={openMenu}>
          ☰
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "active" : ""}`} id="sidebar">
        <div className="close-btn" onClick={closeMenu}>×</div>
        <a href="#">🏠 Home</a>
        <a href="#">📌 About</a>
        <a href="#">🚀 Services</a>
        <a href="#">📞 Contact</a>
        <a href="#">⚙️ Settings</a>
      </div>
    </>
  );
};

export default Navbar;
