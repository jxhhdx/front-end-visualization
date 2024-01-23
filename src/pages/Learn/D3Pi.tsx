import React from 'react';
  
export interface D3PiProps {
  value: string
  onChange: () => void
}

const D3Pi: React.FC<D3PiProps> = () => {
  // Your component code here
  return (
    <div>
      <h1>D3Pi Component</h1>
    </div>
  );
};
D3Pi.displayName = 'D3Pi'
export default D3Pi;
