import React from 'react';
import './GridOverlay.css'; // นำเข้าไฟล์ CSS สำหรับ Grid

const GridOverlay = ({ isVisible }) => {
  return (
    <div className={`grid-overlay ${isVisible ? 'visible' : ''}`}>
      <div className="grid-cell"></div>
      <div className="grid-cell"></div>
      <div className="grid-cell"></div>
      <div className="grid-cell"></div>
      <div className="grid-cell"></div>
      <div className="grid-cell"></div>
      <div className="grid-cell"></div>
      <div className="grid-cell"></div>
      <div className="grid-cell"></div>
    </div>
  );
};

export default GridOverlay;
