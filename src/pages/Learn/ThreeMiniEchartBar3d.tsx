import React from 'react';
  
export interface ThreeMiniEchartBar3dProps {
  value: string
  onChange: () => void
}

const ThreeMiniEchartBar3d: React.FC<ThreeMiniEchartBar3dProps> = () => {
  // Your component code here
  return (
    <div>
      <h1>ThreeMiniEchartBar3d Component</h1>
    </div>
  );
};
ThreeMiniEchartBar3d.displayName = 'ThreeMiniEchartBar3d'
export default ThreeMiniEchartBar3d;
