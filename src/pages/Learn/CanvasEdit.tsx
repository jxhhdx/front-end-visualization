import React from 'react';
  
export interface CanvasEditProps {
  value: string
  onChange: () => void
}

const CanvasEdit: React.FC<CanvasEditProps> = () => {
  // Your component code here
  return (
    <div>
      <h1>CanvasEdit Component</h1>
    </div>
  );
};
CanvasEdit.displayName = 'CanvasEdit'
export default CanvasEdit;
