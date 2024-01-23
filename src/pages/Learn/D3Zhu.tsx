import React from 'react';
  
export interface D3ZhuProps {
  value: string
  onChange: () => void
}

const D3Zhu: React.FC<D3ZhuProps> = () => {
  // Your component code here
  return (
    <div>
      <h1>D3Zhu Component</h1>
    </div>
  );
};
D3Zhu.displayName = 'D3Zhu'
export default D3Zhu;
