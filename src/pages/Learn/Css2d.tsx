import React from 'react';
  
export interface Css2dProps {
  value: string
  onChange: () => void
}

const Css2d: React.FC<Css2dProps> = () => {
  // Your component code here
  return (
    <div>
      <h1>Css2d Component</h1>
    </div>
  );
};
Css2d.displayName = 'Css2d'
export default Css2d;
