import React from 'react';
  
export interface D3ZheProps {
  value: string
  onChange: () => void
}

const D3Zhe: React.FC<D3ZheProps> = () => {
  // Your component code here
  return (
    <div>
      <h1>D3Zhe Component</h1>
    </div>
  );
};
D3Zhe.displayName = 'D3Zhe'
export default D3Zhe;
