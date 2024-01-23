import React from 'react';
  
export interface WegglGlJzProps {
  value: string
  onChange: () => void
}

const WegglGlJz: React.FC<WegglGlJzProps> = () => {
  // Your component code here
  return (
    <div>
      <h1>WegglGlJz Component</h1>
    </div>
  );
};
WegglGlJz.displayName = 'WegglGlJz'
export default WegglGlJz;
