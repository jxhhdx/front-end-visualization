import React from 'react';
  
export interface ShaderGlslProps {
  value: string
  onChange: () => void
}

const ShaderGlsl: React.FC<ShaderGlslProps> = () => {
  // Your component code here
  return (
    <div>
      <h1>ShaderGlsl Component</h1>
    </div>
  );
};
ShaderGlsl.displayName = 'ShaderGlsl'
export default ShaderGlsl;
