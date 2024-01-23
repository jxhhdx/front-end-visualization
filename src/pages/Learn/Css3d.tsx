import React from 'react';
  
export interface Css3dProps {
  value: string
  onChange: () => void
}

const Css3d: React.FC<Css3dProps> = () => {
  // Your component code here
  return (
    <div>
      <h1>Css3d Component</h1>
    </div>
  );
};
Css3d.displayName = 'Css3d'
export default Css3d;
