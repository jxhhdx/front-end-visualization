import React from 'react';
  
export interface ThreeSampleGameProps {
  value: string
  onChange: () => void
}

const ThreeSampleGame: React.FC<ThreeSampleGameProps> = () => {
  // Your component code here
  return (
    <div>
      <h1>ThreeSampleGame Component</h1>
    </div>
  );
};
ThreeSampleGame.displayName = 'ThreeSampleGame'
export default ThreeSampleGame;
