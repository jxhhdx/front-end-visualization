import React from 'react';
  
export interface Canvas01KLineProps {
  value: string
  onChange: () => void
}

const Canvas01KLine: React.FC<Canvas01KLineProps> = () => {
  // Your component code here
  return (
    <div>
      <h1>Canvas01KLine Component</h1>
    </div>
  );
};
Canvas01KLine.displayName = 'Canvas01KLine'
export default Canvas01KLine;
