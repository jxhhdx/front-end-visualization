import React from 'react';
  
export interface ShaderTuAndFuncProps {
  value: string
  onChange: () => void
}

const ShaderTuAndFunc: React.FC<ShaderTuAndFuncProps> = () => {
  // Your component code here
  return (
    <div>
      <h1>ShaderTuAndFunc Component</h1>
    </div>
  );
};
ShaderTuAndFunc.displayName = 'ShaderTuAndFunc'
export default ShaderTuAndFunc;
