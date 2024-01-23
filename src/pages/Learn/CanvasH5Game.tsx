import React from 'react';
  
export interface CanvasH5GameProps {
  value: string
  onChange: () => void
}

const CanvasH5Game: React.FC<CanvasH5GameProps> = () => {
  // Your component code here
  return (
    <div>
      <h1>CanvasH5Game Component</h1>
    </div>
  );
};
CanvasH5Game.displayName = 'CanvasH5Game'
export default CanvasH5Game;
