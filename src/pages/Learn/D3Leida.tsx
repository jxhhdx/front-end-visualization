import React from 'react';
  
export interface D3LeidaProps {
  value: string
  onChange: () => void
}

const D3Leida: React.FC<D3LeidaProps> = () => {
  // Your component code here
  return (
    <div>
      <h1>D3Leida Component</h1>
    </div>
  );
};
D3Leida.displayName = 'D3Leida'
export default D3Leida;
