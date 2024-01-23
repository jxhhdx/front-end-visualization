import React from 'react';
  
export interface ShaderRaySdfProps {
  value: string
  onChange: () => void
}

const ShaderRaySdf: React.FC<ShaderRaySdfProps> = () => {
  // Your component code here
  return (
    <div>
      <h1>ShaderRaySdf Component</h1>
    </div>
  );
};
ShaderRaySdf.displayName = 'ShaderRaySdf'
export default ShaderRaySdf;
