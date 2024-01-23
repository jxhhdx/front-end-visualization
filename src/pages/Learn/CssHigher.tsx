import React from 'react';
  
export interface CssHigherProps {
  value: string
  onChange: () => void
}

const CssHigher: React.FC<CssHigherProps> = () => {
  // Your component code here
  return (
    <div>
      <h1>CssHigher Component</h1>
    </div>
  );
};
CssHigher.displayName = 'CssHigher'
export default CssHigher;
