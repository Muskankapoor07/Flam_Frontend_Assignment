// src/components/BottomSheet.jsx
import React, { useRef, useState, useEffect } from 'react';
import './BottomSheet.css';

const BottomSheet = () => {
  const sheetRef = useRef(null);
  const [position, setPosition] = useState('closed');
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [dragging, setDragging] = useState(false);

  const windowHeight = window.innerHeight;

  const snapPoints = {
    full: 50, // 50px from top
    half: windowHeight / 2,
    closed: windowHeight - 80,
  };

  const getClosestSnap = (y) => {
    return Object.entries(snapPoints).reduce((prev, curr) =>
      Math.abs(curr[1] - y) < Math.abs(prev[1] - y) ? curr : prev
    )[0];
  };

  const handleDragStart = (e) => {
    setDragging(true);
    setStartY(e.clientY || e.touches[0].clientY);
  };

  const handleDragMove = (e) => {
    if (!dragging) return;
    const clientY = e.clientY || e.touches[0].clientY;
    const delta = clientY - startY;
    setCurrentY(delta);
  };

  const handleDragEnd = () => {
    setDragging(false);
    const sheetTop = sheetRef.current.getBoundingClientRect().top;
    const snapTo = getClosestSnap(sheetTop);
    setPosition(snapTo);
    setCurrentY(0);
  };

  const getTranslate = () => {
    if (dragging) return `translateY(${currentY}px)`;
    return `translateY(${snapPoints[position]}px)`;
  };

  useEffect(() => {
    const move = (e) => handleDragMove(e);
    const end = () => handleDragEnd();

    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', end);
    document.addEventListener('touchmove', move);
    document.addEventListener('touchend', end);

    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseup', end);
      document.removeEventListener('touchmove', move);
      document.removeEventListener('touchend', end);
    };
  }, [dragging]);

  return (
    <div
      ref={sheetRef}
      className="bottom-sheet"
      style={{
        transform: getTranslate(),
        transition: dragging ? 'none' : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
      }}
    >
      <div
        className="handle"
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
      ></div>
      <div className="sheet-content">
        <h2>Welcome to the Bottom Sheet</h2>
        <p>This bottom sheet is dynamic, animated, and theme-aware!</p>
        <div className="button-group">
          <button onClick={() => setPosition('full')}>Full</button>
          <button onClick={() => setPosition('half')}>Half</button>
          <button onClick={() => setPosition('closed')}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default BottomSheet;
