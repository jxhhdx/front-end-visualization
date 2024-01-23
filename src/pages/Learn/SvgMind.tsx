import React from 'react';
  
export interface SvgMindProps {
  value: string
  onChange: () => void
}

const SvgMind: React.FC<SvgMindProps> = () => {
  // Your component code here
  return (
    <div>
      <h1>SvgMind Component</h1>
    </div>
  );
};
SvgMind.displayName = 'SvgMind'
export default SvgMind;
