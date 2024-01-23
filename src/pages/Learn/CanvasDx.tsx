import React from 'react';
  
export interface CanvasDxProps {
  value: string
  onChange: () => void
}

const CanvasDx: React.FC<CanvasDxProps> = () => {
  // Your component code here
  return (
    <div>
      <h1>CanvasDx Component</h1>
    </div>
  );
};
CanvasDx.displayName = 'CanvasDx'
export default CanvasDx;
