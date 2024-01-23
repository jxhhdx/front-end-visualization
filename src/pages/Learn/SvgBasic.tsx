import React from 'react';
  
export interface SvgBasicProps {
  value: string
  onChange: () => void
}

const SvgBasic: React.FC<SvgBasicProps> = () => {
  // Your component code here
  return (
    <div>
      <h1>SvgBasic Component</h1>
    </div>
  );
};
SvgBasic.displayName = 'SvgBasic'
export default SvgBasic;
