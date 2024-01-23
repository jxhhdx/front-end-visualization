import React from 'react';
  
export interface Three3dJianmoProps {
  value: string
  onChange: () => void
}

const Three3dJianmo: React.FC<Three3dJianmoProps> = () => {
  // Your component code here
  return (
    <div>
      <h1>Three3dJianmo Component</h1>
    </div>
  );
};
Three3dJianmo.displayName = 'Three3dJianmo'
export default Three3dJianmo;
