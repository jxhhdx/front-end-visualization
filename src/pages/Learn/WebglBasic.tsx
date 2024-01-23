import React from 'react';
  
export interface WebglBasicProps {
  value: string
  onChange: () => void
}

const WebglBasic: React.FC<WebglBasicProps> = () => {
  // Your component code here
  return (
    <div>
      <h1>WebglBasic Component</h1>
    </div>
  );
};
WebglBasic.displayName = 'WebglBasic'
export default WebglBasic;
