import React, { useState, useEffect, useRef } from "react";
import "../Student/Sidenav1.css"; // Include your styles here
import n1 from '../Student/n1.png';
import n2 from '../Student/n2.png';
import n3 from '../Student/n3.png';
import n4 from '../Student/n4.png';

import Sidenav from "./Sidenav";
export const Main1 = () => {
  const [active, setActive] = useState(0);
  const listRef = useRef(null);
  const items = [n4, n2, n3, n1];

  const lengthItems = items.length - 1;

  useEffect(() => {
    const autoSlide = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(autoSlide);
  }, [active]);

  const handleNext = () => {
    setActive((prev) => (prev + 1 > lengthItems ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 < 0 ? lengthItems : prev - 1));
  };

  const handleDotClick = (index) => {
    setActive(index);
  };

  useEffect(() => {
    if (listRef.current) {
      const checkLeft = listRef.current.children[active].offsetLeft;
      listRef.current.style.left = `-${checkLeft}px`;
    }
  }, [active]);

  return (
    <div className="app-container">
        <Sidenav/>
      <header className="hero1">
        <div className="slider">
          <div className="list" ref={listRef}>
            {items.map((src, index) => (
              <div className="item" key={index}>
                <img src={src} alt={`image${index + 1}`} />
              </div>
            ))}
          </div>
          <div className="buttons">
            <button id="prev" onClick={handlePrev}>
              &lt;
            </button>
            <button id="next" onClick={handleNext}>
              &gt;
            </button>
          </div>
          <ul className="dots">
            {items.map((_, index) => (
              <li
                key={index}
                className={index === active ? "active" : ""}
                onClick={() => handleDotClick(index)}
              ></li>
            ))}
          </ul>
        </div>
        <div className="hero-text">
          <h1>Welcome to NEC Bus Pass Management System</h1>
          <p>Digital Pass, Seamless Journey – Revolutionizing Bus Pass Management</p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Dept Co-ordinator</button>
            <button className="btn btn-secondary">Features</button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      {/* Features Section */}
{/* Features Section */}
<section className="features">
  <h2>Department Coordinator Features</h2>
  <p>
    The department coordinator panel streamlines the verification and approval process for bus pass applications.
  </p>
  <div className="features-grid">
    <div className="feature-item">
      <div className="feature-icon">✔️</div>
      <h3>Verify Student Details</h3>
      <p>Review and verify the details submitted by students for accuracy and validity.</p>
    </div>
    <div className="feature-item">
      <div className="feature-icon">🔗</div>
      <h3>Forward Applications</h3>
      <p>Approve and forward valid applications directly to the admin for further processing.</p>
    </div>
    <div className="feature-item">
      <div className="feature-icon">📄</div>
      <h3>Application History</h3>
      <p>Access a complete history of applications processed, approved, or rejected.</p>
    </div>
    <div className="feature-item">
      <div className="feature-icon">📤</div>
      <h3>Batch Approvals</h3>
      <p>Process multiple applications at once, saving time and improving efficiency.</p>
    </div>
    <div className="feature-item">
      <div className="feature-icon">🔔</div>
      <h3>Notifications</h3>
      <p>Receive alerts and updates about pending applications and deadlines.</p>
    </div>
    <div className="feature-item">
      <div className="feature-icon">📊</div>
      <h3>Analytics Dashboard</h3>
      <p>Get insights and data about the number of applications handled and forwarded.</p>
    </div>
  </div>
</section>


    </div>
  );
};
