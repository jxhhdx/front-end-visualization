import React from 'react';
  
export interface CanvasJuanzouGameProps {
  value: string
  onChange: () => void
}

const CanvasJuanzouGame: React.FC<CanvasJuanzouGameProps> = () => {
  // Your component code here
  return (
    <div>
      <h1>CanvasJuanzouGame Component</h1>
    </div>
  );
};
CanvasJuanzouGame.displayName = 'CanvasJuanzouGame'
export default CanvasJuanzouGame;
