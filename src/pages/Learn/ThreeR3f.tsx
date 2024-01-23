import React from 'react';
  
export interface ThreeR3fProps {
  value: string
  onChange: () => void
}

const ThreeR3f: React.FC<ThreeR3fProps> = () => {
  // Your component code here
  return (
    <div>
      <h1>ThreeR3f Component</h1>
    </div>
  );
};
ThreeR3f.displayName = 'ThreeR3f'
export default ThreeR3f;
