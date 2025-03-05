import React, { useEffect, useState } from "react";
import "../styles/opening.css";

const Opening = () => {
  const [showMainPage, setShowMainPage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMainPage(true);
    }, 3500); // Sync with the animation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="opening-container">
      {!showMainPage && (
        <>
          <div className="white-bg"></div>
          <div className="black-slider">
            <div className="brand-text">
              <span className="digi">Digi</span>
              <span className="defence">Defence</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Opening;
