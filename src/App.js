import './App.css';
import { useState, useCallback } from 'react';

const width = 960;
const height = 500;
const circleRadius = 30

const initialMousePosition = {x: width/2, y: height/2}



function App() {
  const [mousPosition, setMousePosition] = useState(initialMousePosition)

  const handleMouseMove = useCallback((event) => {
    const {clientX, clientY} = event
    setMousePosition({x: clientX, y: clientY})
  }, [setMousePosition]);

  return (
    <svg width={width} height={height} onMouseMove={handleMouseMove}>    
        
      <circle
        cx={mousPosition.x}
        cy={mousPosition.y}
        r={circleRadius}
      />

    </svg>
  );
}

export default App;
