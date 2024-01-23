import React from 'react';
  
export interface SvgEditProps {
  value: string
  onChange: () => void
}

const SvgEdit: React.FC<SvgEditProps> = () => {
  // Your component code here
  return (
    <div>
      <h1>SvgEdit Component</h1>
    </div>
  );
};
SvgEdit.displayName = 'SvgEdit'
export default SvgEdit;
