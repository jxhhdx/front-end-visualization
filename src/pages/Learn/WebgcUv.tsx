import React from 'react';
  
export interface WebgcUvProps {
  value: string
  onChange: () => void
}

const WebgcUv: React.FC<WebgcUvProps> = () => {
  // Your component code here
  return (
    <div>
      <h1>WebgcUv Component</h1>
    </div>
  );
};
WebgcUv.displayName = 'WebgcUv'
export default WebgcUv;
