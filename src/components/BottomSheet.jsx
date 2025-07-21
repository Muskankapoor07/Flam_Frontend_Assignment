import React, { useRef, useState, useEffect } from 'react';
import './BottomSheet.css';

const BottomSheet = () => {
  const sheetRef = useRef(null);
  const handleRef = useRef(null);
  const [position, setPosition] = useState('closed');
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [dragging, setDragging] = useState(false);

  const windowHeight = window.innerHeight;

  const snapPoints = {
    full: 50,
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

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      if (position === 'closed') setPosition('half');
      else if (position === 'half') setPosition('full');
    } else if (e.key === 'ArrowDown') {
      if (position === 'full') setPosition('half');
      else if (position === 'half') setPosition('closed');
    } else if (e.key === 'Escape') {
      setPosition('closed');
    }
  };

  useEffect(() => {
    const move = (e) => handleDragMove(e);
    const end = () => handleDragEnd();

    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', end);
    document.addEventListener('touchmove', move);
    document.addEventListener('touchend', end);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseup', end);
      document.removeEventListener('touchmove', move);
      document.removeEventListener('touchend', end);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [dragging, position]);

  return (
    <div
      ref={sheetRef}
      className="bottom-sheet"
      style={{
        transform: getTranslate(),
        transition: dragging ? 'none' : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
      }}
      role="dialog"
      aria-label="Bottom Sheet Panel"
    >
      <div
        ref={handleRef}
        className="handle"
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
        tabIndex={0}
        aria-label="Drag or press arrow keys to move"
        role="button"
      ></div>
      <div className="sheet-content">
        <h2 tabIndex={0}>Welcome to the Bottom Sheet</h2>
        <p tabIndex={0}>This bottom sheet is dynamic, animated, and accessible!</p>
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
