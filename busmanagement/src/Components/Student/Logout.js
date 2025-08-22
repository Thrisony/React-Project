import React from "react";
import { useNavigate } from "react-router-dom";
import './Logout.css';
const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Clear token
    alert("Logged out successfully!");
    navigate("/student", { replace: true }); // Redirect to login
  };

  return (
    <button onClick={handleLogout} className="logout-btn">
      Logout
    </button>
  );
};

export default Logout;
