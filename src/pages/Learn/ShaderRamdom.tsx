import React from 'react';
  
export interface ShaderRamdomProps {
  value: string
  onChange: () => void
}

const ShaderRamdom: React.FC<ShaderRamdomProps> = () => {
  // Your component code here
  return (
    <div>
      <h1>ShaderRamdom Component</h1>
    </div>
  );
};
ShaderRamdom.displayName = 'ShaderRamdom'
export default ShaderRamdom;
