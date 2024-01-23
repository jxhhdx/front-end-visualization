import React from 'react';
  
export interface CanvasHtml5Props {
  value: string
  onChange: () => void
}

const CanvasHtml5: React.FC<CanvasHtml5Props> = () => {
  // Your component code here
  return (
    <div>
      <h1>CanvasHtml5 Component</h1>
    </div>
  );
};
CanvasHtml5.displayName = 'CanvasHtml5'
export default CanvasHtml5;
